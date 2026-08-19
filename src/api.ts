import { lookup } from "./config";

export type Recipient = {
  name: string;
  email?: string;
};

type LookupResponse = {
  ok: boolean;
  name?: string;
  email?: string;
  error?: string;
};

export class LookupError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LookupError";
  }
}

export function parseCertificateParams(search = window.location.search) {
  const params = new URLSearchParams(search);
  return {
    token: params.get("token")?.trim() || "",
    email: params.get("email")?.trim() || "",
  };
}

function jsonpLookup(url: string): Promise<LookupResponse> {
  return new Promise((resolve, reject) => {
    const callbackName = `__certCb${Date.now()}${Math.floor(Math.random() * 1e6)}`;
    const script = document.createElement("script");

    const timer = window.setTimeout(() => {
      cleanup();
      reject(new LookupError("Lookup timed out. Check that the Apps Script web app is deployed."));
    }, 15000);

    const cleanup = () => {
      window.clearTimeout(timer);
      script.remove();
      delete (window as unknown as Record<string, unknown>)[callbackName];
    };

    (window as unknown as Record<string, unknown>)[callbackName] = (data: LookupResponse) => {
      cleanup();
      resolve(data);
    };

    script.onerror = () => {
      cleanup();
      reject(new LookupError("Could not reach the certificate service. Try again in a moment."));
    };

    const request = new URL(url);
    request.searchParams.set("callback", callbackName);
    script.src = request.toString();
    document.body.appendChild(script);
  });
}

export async function fetchRecipient(query: {
  token?: string;
  email?: string;
}): Promise<Recipient> {
  if (!lookup.appsScriptUrl) {
    throw new LookupError(
      "The certificate lookup service is not configured yet. Add VITE_APPS_SCRIPT_URL after deploying Apps Script.",
    );
  }

  const url = new URL(lookup.appsScriptUrl);
  if (query.token) url.searchParams.set("token", query.token);
  else if (query.email) url.searchParams.set("email", query.email);
  else {
    throw new LookupError("Enter the email you used on the feedback form.");
  }

  const data = await jsonpLookup(url.toString());
  if (!data.ok || !data.name) {
    throw new LookupError(
      data.error ||
        "We could not find a feedback submission for that email. Use the same email you entered on the form.",
    );
  }

  return { name: data.name.trim(), email: data.email };
}
