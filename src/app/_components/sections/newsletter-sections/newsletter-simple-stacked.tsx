import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";

export default function NewsletterSimpleStacked({theme}: AiComponentProps) {
  return (
    <div>
      <div className="relative isolate py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`max-w-2xl text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            } sm:text-4xl`}
          >
            <h2 className="inline sm:block">
              Stay Updated with the Latest Car Rental News! 1
            </h2>{" "}
            <p className="inline sm:block">
              Sign up for our newsletter and never miss an update. 2
            </p>
          </div>
          <form className="mt-10 max-w-md">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={
                  theme === "dark"
                    ? "min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    : "min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-ai-title-regular shadow-sm ring-1 ring-inset ring-ai-subtext-regular/[.4] placeholder:text-ai-subtext-regular/[.5] focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                }
                placeholder="Enter your email"
              />
              <Button theme={theme} href="#">Subscribe</Button>
            </div>
            <p
              className={`mt-4 text-sm leading-6 ${
                theme === "dark"
                  ? "text-ai-subtext-dark"
                  : "text-ai-subtext-regular"
              }`}
            >
              We value your privacy. Read our privacy policy. 4{" "}
              <a
                href="#"
                className={`font-semibold ${
                  theme === "dark"
                    ? "text-primary-500 hover:text-primary-400"
                    : "text-primary-600 hover:text-primary-500"
                }`}
              >
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
