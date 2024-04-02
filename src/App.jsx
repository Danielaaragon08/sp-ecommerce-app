import { AppLayout } from "./layout/AppLayout";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const App = () => {
  return (
    <>
      <AppTheme>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </AppTheme>
    </>
  );
};
