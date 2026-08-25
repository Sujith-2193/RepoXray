import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props { children: ReactNode }
interface State { hasError: boolean; message: string }

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: "" };

  static getDerivedStateFromError(error: unknown): State {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : "An unexpected error occurred.",
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("RepoXray render error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center bg-background p-6 text-foreground">
          <div className="w-full max-w-lg rounded-lg border border-border bg-card p-6 shadow-soft">
            <p className="font-mono text-sm text-primary">// application error</p>
            <h1 className="mt-2 text-xl font-semibold">RepoXray could not render this page.</h1>
            <p className="mt-3 text-sm text-muted-foreground">{this.state.message}</p>
            <button
              className="mt-5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              onClick={() => window.location.assign("/")}
            >
              Return home
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
