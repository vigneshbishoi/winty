// *************** import statement *************** //
import * as Sentry from "@sentry/react-native";
// *************** constant statement *************** //
const SENTRY_DSN =
    "https://43b5b0dc645247d3aaa3d6863702e6d6@o4504141926760448.ingest.sentry.io/4504160523059200";

const SentryReport = {
    // *************** Sentry configuration *************** //
    sentryInstall() {
        Sentry.init({
            dsn: SENTRY_DSN,
            tracesSampleRate: 1,
            sampleRate: 1,
            attachStacktrace: false,
            enableOutOfMemoryTracking: false,
        });
    },
    // *************** Sentry test performance *************** //
    trackPerformanceTransactions() {
        const transaction = Sentry.startTransaction({ name: "App Load" });
        Sentry.getCurrentHub().configureScope((scope) =>
            scope.setSpan(transaction)
        );
        const span = transaction.startChild({
            data: {
                title: "App Load",
            },
            op: "task",
            description: "App Load Task",
        });
        span.finish();
        transaction.finish();
    }
};
export default SentryReport;

