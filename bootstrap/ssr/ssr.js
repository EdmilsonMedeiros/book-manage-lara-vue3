import { Link, createInertiaApp } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createSSRApp, h } from "vue";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {
  data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
      },
      deep: true
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.$page.props.flash.success && $data.show) {
    _push(`<div class="alert alert-success alert-dismissible fade show d-flex align-items-center" role="alert"><div>${ssrInterpolate(_ctx.$page.props.flash.success)}</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show) {
    _push(`<div class="alert alert-danger alert-dismissible fade show d-flex align-items-center" role="alert"><div>`);
    if (_ctx.$page.props.flash.error) {
      _push(`<div>${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
    } else {
      _push(`<div><ul><!--[-->`);
      ssrRenderList(_ctx.$page.props.errors, (error, key) => {
        _push(`<li>${ssrInterpolate(error)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
    }
    _push(`</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/FlashMessages.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FlashMessages = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FlashMessages
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  components: {
    Link,
    FlashMessages
  },
  data() {
    return {
      form: {
        email: "johndoe@example.com",
        password: "12345678"
      }
    };
  },
  methods: {
    async handleSubmit() {
      this.$inertia.post("/login", this.form);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FlashMessages = resolveComponent("FlashMessages");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5" }, _attrs))} data-v-7bcf82ac><div class="row justify-content-center" data-v-7bcf82ac><div class="col-md-6" data-v-7bcf82ac>`);
  _push(ssrRenderComponent(_component_FlashMessages, null, null, _parent));
  _push(`<div class="card shadow-lg border-0 rounded-lg overflow-hidden" data-v-7bcf82ac><div class="card-header bg-gradient-primary text-white text-center py-4" style="${ssrRenderStyle({ "background": "linear-gradient(\n                                45deg,\n                                #4e73df,\n                                #224abe\n                            )" })}" data-v-7bcf82ac><h3 class="mb-0 fw-bold" data-v-7bcf82ac><i class="bi bi-person-circle me-2 fs-4" data-v-7bcf82ac></i> Bem-vindo de volta </h3><p class="mt-2 mb-0 text-white-50" data-v-7bcf82ac> Por favor, faça login na sua conta </p></div><div class="card-body p-4" data-v-7bcf82ac><form class="needs-validation" data-v-7bcf82ac><div class="mb-4" data-v-7bcf82ac><label for="email" class="form-label fw-bold" data-v-7bcf82ac>Endereço de Email</label><div class="input-group input-group-lg" data-v-7bcf82ac><span class="input-group-text bg-light border-end-0" data-v-7bcf82ac><i class="bi bi-envelope text-primary" data-v-7bcf82ac></i></span><input${ssrRenderAttr("value", $data.form.email)} type="email" class="form-control border-start-0" id="email" required autofocus placeholder="Digite seu email" data-v-7bcf82ac></div></div><div class="mb-4" data-v-7bcf82ac><label for="password" class="form-label fw-bold" data-v-7bcf82ac>Senha</label><div class="input-group input-group-lg" data-v-7bcf82ac><span class="input-group-text bg-light border-end-0" data-v-7bcf82ac><i class="bi bi-key text-primary" data-v-7bcf82ac></i></span><input${ssrRenderAttr("value", $data.form.password)} type="password" class="form-control border-start-0" id="password" required placeholder="Digite sua senha" data-v-7bcf82ac></div></div><button type="submit" class="btn btn-primary w-100 py-3 fw-bold text-uppercase btn-lg shadow-sm" data-v-7bcf82ac><i class="bi bi-box-arrow-in-right me-2" data-v-7bcf82ac></i>Entrar </button></form></div><div class="card-footer text-center py-4 bg-light border-0" data-v-7bcf82ac><div class="text-muted" data-v-7bcf82ac> Não tem uma conta? `);
  _push(ssrRenderComponent(_component_Link, {
    href: "/register",
    class: "text-primary fw-bold text-decoration-none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cadastre-se aqui `);
      } else {
        return [
          createTextVNode(" Cadastre-se aqui ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-7bcf82ac"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  components: {
    Link,
    FlashMessages
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    async register() {
      this.$inertia.post("/register", this.form);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FlashMessages = resolveComponent("FlashMessages");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5" }, _attrs))}><div class="row justify-content-center"><div class="col-md-6">`);
  _push(ssrRenderComponent(_component_FlashMessages, null, null, _parent));
  _push(`<div class="card shadow-lg border-0 rounded-lg overflow-hidden"><div class="card-header bg-gradient-primary text-white text-center py-4" style="${ssrRenderStyle({ "background": "linear-gradient(\n                                45deg,\n                                #4e73df,\n                                #224abe\n                            )" })}"><h3 class="mb-0 fw-bold"><i class="bi bi-person-plus me-2 fs-4"></i> Criar uma nova conta </h3><p class="mt-2 mb-0 text-white-50"> Preencha os campos para se cadastrar </p></div><div class="card-body p-4"><form class="needs-validation"><div class="mb-4"><label for="name" class="form-label fw-bold">Nome Completo</label><div class="input-group input-group-lg"><span class="input-group-text bg-light border-end-0"><i class="bi bi-person text-primary"></i></span><input type="text" class="form-control border-start-0" id="name"${ssrRenderAttr("value", $data.form.name)} required autofocus placeholder="Digite seu nome"></div></div><div class="mb-4"><label for="email" class="form-label fw-bold">Endereço de Email</label><div class="input-group input-group-lg"><span class="input-group-text bg-light border-end-0"><i class="bi bi-envelope text-primary"></i></span><input type="email" class="form-control border-start-0" id="email"${ssrRenderAttr("value", $data.form.email)} required placeholder="Digite seu email"></div></div><div class="mb-4"><label for="password" class="form-label fw-bold">Senha</label><div class="input-group input-group-lg"><span class="input-group-text bg-light border-end-0"><i class="bi bi-key text-primary"></i></span><input type="password" class="form-control border-start-0" id="password"${ssrRenderAttr("value", $data.form.password)} required placeholder="Digite sua senha"></div></div><div class="mb-4"><label for="password_confirmation" class="form-label fw-bold">Confirmar Senha</label><div class="input-group input-group-lg"><span class="input-group-text bg-light border-end-0"><i class="bi bi-key text-primary"></i></span><input type="password" class="form-control border-start-0" id="password_confirmation"${ssrRenderAttr("value", $data.form.password_confirmation)} required placeholder="Confirme sua senha"></div></div><button type="submit" class="btn btn-primary w-100 py-3 fw-bold text-uppercase btn-lg shadow-sm"><i class="bi bi-person-plus me-2"></i>Cadastrar </button></form></div><div class="card-footer text-center py-4 bg-light border-0"><div class="text-muted"> Já tem uma conta? `);
  _push(ssrRenderComponent(_component_Link, {
    href: "/login",
    class: "text-primary fw-bold text-decoration-none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Faça login aqui `);
      } else {
        return [
          createTextVNode(" Faça login aqui ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  components: {
    Link
  },
  props: {
    user: Object
    // Replace with actual user data
  },
  data() {
    return {
      errorMessage: null,
      successMessage: null
    };
  },
  methods: {
    logOut() {
      try {
        const response = this.$inertia.get("/logOut");
        this.$router.push("/login");
      } catch (e) {
        console.log(e);
      }
    },
    isActiveRoute(routeName) {
      return this.$route.name === routeName;
    },
    clearError() {
      this.errorMessage = null;
    },
    clearSuccess() {
      this.successMessage = null;
    }
  },
  mounted() {
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f9b196a0><div class="container mt-1" data-v-f9b196a0><div class="card bg-primary text-white" data-v-f9b196a0><div class="card-body d-flex justify-content-between align-items-center" data-v-f9b196a0><div data-v-f9b196a0><span class="text-white-50" data-v-f9b196a0>Bem-vindo,</span><span class="fw-bold ms-1" data-v-f9b196a0>${ssrInterpolate($props.user.name)}</span></div><form class="m-0" data-v-f9b196a0><button type="submit" class="btn btn-outline-light" data-v-f9b196a0><i class="bi bi-box-arrow-right me-2" data-v-f9b196a0></i>Sair </button></form></div></div></div><div class="container" data-v-f9b196a0><nav class="navbar navbar-expand-lg navbar-light bg-light mt-2" data-v-f9b196a0><div class="p-1" data-v-f9b196a0><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-f9b196a0><span class="navbar-toggler-icon" data-v-f9b196a0></span></button></div></nav></div>`);
  if ($data.errorMessage) {
    _push(`<div class="container mt-4" data-v-f9b196a0><div class="alert alert-danger alert-dismissible fade show" role="alert" data-v-f9b196a0>${ssrInterpolate($data.errorMessage)} <button type="button" class="btn-close" aria-label="Close" data-v-f9b196a0></button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.successMessage) {
    _push(`<div class="container mt-4" data-v-f9b196a0><div class="alert alert-success alert-dismissible fade show" role="alert" data-v-f9b196a0>${ssrInterpolate($data.successMessage)} <button type="button" class="btn-close" aria-label="Close" data-v-f9b196a0></button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Layout/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f9b196a0"]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  props: {
    user: Object
  },
  components: {
    Layout,
    FlashMessages
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_FlashMessages = resolveComponent("FlashMessages");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Layout, { user: $props.user }, null, _parent));
  _push(`<br><br><br><br><h1>Dashboard</h1>`);
  _push(ssrRenderComponent(_component_FlashMessages, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": __vite_glob_0_0, "./Pages/Auth/Register.vue": __vite_glob_0_1, "./Pages/Components/FlashMessages.vue": __vite_glob_0_2, "./Pages/Dashboard/Index.vue": __vite_glob_0_3, "./Pages/Layout/Layout.vue": __vite_glob_0_4 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
