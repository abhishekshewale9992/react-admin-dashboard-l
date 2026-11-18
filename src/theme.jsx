// Custom theme - Abhishek Shewale
const BRAND = {
  primary: { light: "#818cf8", main: "#6366f1", dark: "#4338ca" },
  secondary: { light: "#5eead4", main: "#14b8a6", dark: "#0f766e" },
};

export const getDesignTokens = (mode) => {
  const dark = mode === "dark";

  return {
    palette: {
      mode,
      primary: BRAND.primary,
      secondary: dark
        ? { ...BRAND.secondary, main: "#2dd4bf" }
        : BRAND.secondary,
      info: dark
        ? { light: "#93c5fd", main: "#60a5fa", dark: "#2563eb" }
        : { light: "#3b82f6", main: "#2563eb", dark: "#1d4ed8" },
      success: { main: dark ? "#34d399" : "#10b981" },
      error: { main: dark ? "#f87171" : "#ef4444" },
      background: dark
        ? { default: "#0b1020", paper: "#141a2e" }
        : { default: "#f4f6fb", paper: "#ffffff" },
      text: dark
        ? { primary: "#e5e9f5", secondary: "#9aa4bf" }
        : { primary: "#1e2640", secondary: "#5b6580" },
      divider: dark ? "rgba(148,163,184,0.16)" : "rgba(15,23,42,0.1)",
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: dark
              ? "radial-gradient(1200px 600px at 100% -10%, rgba(99,102,241,0.14), transparent), #0b1020"
              : "radial-gradient(1200px 600px at 100% -10%, rgba(99,102,241,0.10), transparent), #f4f6fb",
            backgroundAttachment: "fixed",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: dark
              ? "linear-gradient(90deg, #1e1b4b 0%, #312e81 55%, #0f766e 140%)"
              : "linear-gradient(90deg, #4f46e5 0%, #6366f1 55%, #14b8a6 140%)",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(79,70,229,0.28)",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundImage: "none",
            backgroundColor: dark ? "#0f1428" : "#ffffff",
            borderRight: `1px solid ${
              dark ? "rgba(148,163,184,0.14)" : "rgba(15,23,42,0.08)"
            }`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 999,
            fontWeight: 600,
            transition:
              "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
            boxShadow: "none",
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: dark
                ? "0 8px 18px rgba(0,0,0,0.6)"
                : "0 8px 18px rgba(79,70,229,0.28)",
            },
          },
          containedPrimary: {
            backgroundImage: "linear-gradient(135deg, #6366f1, #4f46e5)",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            border: `1px solid ${
              dark ? "rgba(148,163,184,0.12)" : "rgba(15,23,42,0.06)"
            }`,
            transition: "box-shadow 0.2s ease, background-color 0.2s ease",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: "background-color 0.2s ease, transform 0.2s ease",
            "&:hover": { transform: "translateY(-1px)" },
          },
        },
      },
    },
  };
};
