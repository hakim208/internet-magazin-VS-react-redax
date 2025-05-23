import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=fbe423c6"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=fbe423c6"; const StrictMode = __vite__cjsImport1_react["StrictMode"]; const Suspense = __vite__cjsImport1_react["Suspense"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=fbe423c6"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import "/src/app/style/global.css?t=1748006261846";
import { Abaut, Account, AddTocart, Checkout, Contact, ExploreOurProducts, Home, InfoPrioduct, Layout, Login, Order, SignUp } from "/src/pages/lazy.js?t=1748006261846";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=fbe423c6";
import { store } from "/src/entities/store/store.js";
import { BrowserRouter, Route, Router, Routes } from "/node_modules/.vite/deps/react-router.js?v=fbe423c6";
import Loading from "/src/pages/loading/loading.jsx";
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(BrowserRouter, { children: /* @__PURE__ */ jsxDEV(Suspense, { fallback: /* @__PURE__ */ jsxDEV(Loading, {}, void 0, false, {
  fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
  lineNumber: 14,
  columnNumber: 37
}, this), children: /* @__PURE__ */ jsxDEV(Routes, { children: /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Layout, {}, void 0, false, {
  fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
  lineNumber: 16,
  columnNumber: 50
}, this), children: [
  /* @__PURE__ */ jsxDEV(Route, { index: true, element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 17,
    columnNumber: 51
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 17,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "abaut", element: /* @__PURE__ */ jsxDEV(Abaut, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 18,
    columnNumber: 58
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 18,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "contact", element: /* @__PURE__ */ jsxDEV(Contact, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 19,
    columnNumber: 60
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 19,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "signup", element: /* @__PURE__ */ jsxDEV(SignUp, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 20,
    columnNumber: 59
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 20,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "login", element: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 21,
    columnNumber: 58
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 21,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "account", element: /* @__PURE__ */ jsxDEV(Account, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 22,
    columnNumber: 60
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 22,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "order", element: /* @__PURE__ */ jsxDEV(Order, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 23,
    columnNumber: 58
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 23,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "explorProduct", element: /* @__PURE__ */ jsxDEV(ExploreOurProducts, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 24,
    columnNumber: 66
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 24,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "addtocart", element: /* @__PURE__ */ jsxDEV(AddTocart, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 25,
    columnNumber: 62
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 25,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "/infoProduct/:id", element: /* @__PURE__ */ jsxDEV(InfoPrioduct, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 26,
    columnNumber: 69
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 26,
    columnNumber: 29
  }, this),
  /* @__PURE__ */ jsxDEV(Route, { path: "/checkout", element: /* @__PURE__ */ jsxDEV(Checkout, {}, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 27,
    columnNumber: 62
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
    lineNumber: 27,
    columnNumber: 29
  }, this)
] }, void 0, true, {
  fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
  lineNumber: 16,
  columnNumber: 25
}, this) }, void 0, false, {
  fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
  lineNumber: 15,
  columnNumber: 21
}, this) }, void 0, false, {
  fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
  lineNumber: 14,
  columnNumber: 17
}, this) }, void 0, false, {
  fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
  lineNumber: 13,
  columnNumber: 13
}, this) }, void 0, false, {
  fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
  lineNumber: 12,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
  lineNumber: 11,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/Users/Lenovo/Desktop/Internet magazin/my-app/src/app/App.jsx",
  lineNumber: 10,
  columnNumber: 52
}, this));

//# sourceMappingURL=data:application/json;base64,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QUFBLE9Bb0JBLEtBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FzQkEsS0F2QitDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0F3Qm5ELENBQWEiLCJuYW1lcyI6WyJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJjcmVhdGVSb290IiwiQWJhdXQiLCJBY2NvdW50IiwiQWRkVG9jYXJ0IiwiQ2hlY2tvdXQiLCJDb250YWN0IiwiRXhwbG9yZU91clByb2R1Y3RzIiwiSG9tZSIsIkluZm9QcmlvZHVjdCIsIkxheW91dCIsIkxvZ2luIiwiT3JkZXIiLCJTaWduVXAiLCJQcm92aWRlciIsInN0b3JlIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVyIiwiUm91dGVzIiwiTG9hZGluZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpY3RNb2RlLCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS9nbG9iYWwuY3NzXCI7XHJcbmltcG9ydCB7IEFiYXV0LCBBY2NvdW50LCBBZGRUb2NhcnQsIENoZWNrb3V0LCBDb250YWN0LCBFeHBsb3JlT3VyUHJvZHVjdHMsIEhvbWUsIEluZm9QcmlvZHVjdCwgTGF5b3V0LCBMb2dpbiwgT3JkZXIsIFNpZ25VcCB9IGZyb20gXCIuLi9wYWdlcy9sYXp5XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2VudGl0aWVzL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL3BhZ2VzL2xvYWRpbmcvbG9hZGluZ1wiO1xyXG5cclxuY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpLnJlbmRlcig8U3RyaWN0TW9kZT5cclxuICAgIDxTdHJpY3RNb2RlPlxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmcgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgLz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJhYmF1dFwiIGVsZW1lbnQ9ezxBYmF1dCAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJzaWdudXBcIiBlbGVtZW50PXs8U2lnblVwIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYWNjb3VudFwiIGVsZW1lbnQ9ezxBY2NvdW50IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJvcmRlclwiIGVsZW1lbnQ9ezxPcmRlciAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiZXhwbG9yUHJvZHVjdFwiIGVsZW1lbnQ9ezxFeHBsb3JlT3VyUHJvZHVjdHMgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cImFkZHRvY2FydFwiIGVsZW1lbnQ9ezxBZGRUb2NhcnQvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luZm9Qcm9kdWN0LzppZFwiIGVsZW1lbnQ9ezxJbmZvUHJpb2R1Y3QvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NoZWNrb3V0XCIgZWxlbWVudD17PENoZWNrb3V0Lz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvU3RyaWN0TW9kZT5cclxuPC9TdHJpY3RNb2RlPik7XHJcbiJdLCJmaWxlIjoiQzovVXNlcnMvTGVub3ZvL0Rlc2t0b3AvSW50ZXJuZXQgbWFnYXppbi9teS1hcHAvc3JjL2FwcC9BcHAuanN4In0=