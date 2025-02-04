import { Link, createInertiaApp } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock, createSSRApp, h } from "vue";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$c = {
  data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
        this.autoClose();
      },
      deep: true
    }
  },
  mounted() {
    this.autoClose();
  },
  methods: {
    autoClose() {
      if (this.show) {
        setTimeout(() => {
          this.show = false;
        }, 8e3);
      }
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
      _push(`<div class="p-0 m-0"><ul class="p-2 m-0"><!--[-->`);
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/FlashMessages.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const FlashMessages = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FlashMessages
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
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
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FlashMessages = resolveComponent("FlashMessages");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5" }, _attrs))} data-v-aff44517><div class="row justify-content-center" data-v-aff44517><div class="col-md-6" data-v-aff44517>`);
  _push(ssrRenderComponent(_component_FlashMessages, null, null, _parent));
  _push(`<div class="card shadow-lg border-0 rounded-lg overflow-hidden" data-v-aff44517><div class="card-header bg-gradient-primary text-white text-center py-4" style="${ssrRenderStyle({ "background": "linear-gradient(\n                                45deg,\n                                #4e73df,\n                                #224abe\n                            )" })}" data-v-aff44517><h3 class="mb-0 fw-bold" data-v-aff44517><i class="bi bi-person-circle me-2 fs-4" data-v-aff44517></i> Bem-vindo de volta </h3><p class="mt-2 mb-0 text-white-50" data-v-aff44517> Por favor, faça login na sua conta </p></div><div class="card-body p-4" data-v-aff44517><form class="needs-validation" data-v-aff44517><div class="mb-4" data-v-aff44517><label for="email" class="form-label fw-bold" data-v-aff44517>Endereço de Email</label><div class="input-group input-group-lg" data-v-aff44517><span class="input-group-text bg-light border-end-0" data-v-aff44517><i class="bi bi-envelope text-primary" data-v-aff44517></i></span><input${ssrRenderAttr("value", $data.form.email)} type="email" class="form-control border-start-0" id="email" required autofocus placeholder="Digite seu email" data-v-aff44517></div></div><div class="mb-4" data-v-aff44517><label for="password" class="form-label fw-bold" data-v-aff44517>Senha</label><div class="input-group input-group-lg" data-v-aff44517><span class="input-group-text bg-light border-end-0" data-v-aff44517><i class="bi bi-key text-primary" data-v-aff44517></i></span><input${ssrRenderAttr("value", $data.form.password)} type="password" class="form-control border-start-0" id="password" required placeholder="Digite sua senha" data-v-aff44517></div></div><button type="submit" class="btn btn-primary w-100 py-3 fw-bold text-uppercase btn-lg shadow-sm" data-v-aff44517><i class="bi bi-box-arrow-in-right me-2" data-v-aff44517></i>Entrar </button></form></div><div class="card-footer text-center py-4 bg-light border-0" data-v-aff44517><div class="text-muted" data-v-aff44517> Não tem uma conta? `);
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-aff44517"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
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
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Register
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  components: {
    Link,
    FlashMessages
  },
  props: {
    user: Object
  },
  data() {
    return {};
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
      return this.$page.url.toString() == routeName;
    },
    clearError() {
      this.errorMessage = null;
    },
    clearSuccess() {
      this.successMessage = null;
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_FlashMessages = resolveComponent("FlashMessages");
  _push(`<!--[--><div><div class="container mt-1"><div class="card bg-primary text-white"><div class="card-body d-flex justify-content-between align-items-center"><div><span class="text-white-50">Bem-vindo,</span><span class="fw-bold ms-1">${ssrInterpolate($props.user.name)}</span></div><form class="m-0"><button type="submit" class="btn btn-outline-light"><i class="bi bi-box-arrow-right me-2"></i>Sair </button></form></div></div></div><div class="container"><nav class="navbar navbar-expand-lg navbar-light bg-light mt-2"><div class="p-1"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/",
    class: [
      "nav-link",
      $options.isActiveRoute("/") ? "active" : ""
    ]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="bi bi-house"${_scopeId}></span> Início `);
      } else {
        return [
          createVNode("span", { class: "bi bi-house" }),
          createTextVNode(" Início ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/authors/",
    class: [
      "nav-link",
      $options.isActiveRoute("/authors") ? "active" : ""
    ]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="bi bi-file-earmark-person"${_scopeId}></span> Gerenciar Autores `);
      } else {
        return [
          createVNode("span", { class: "bi bi-file-earmark-person" }),
          createTextVNode(" Gerenciar Autores ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/users",
    class: [
      "nav-link",
      $options.isActiveRoute("/users") ? "active" : ""
    ]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="bi bi-person-gear"${_scopeId}></span> Gerenciar Permissões `);
      } else {
        return [
          createVNode("span", { class: "bi bi-person-gear" }),
          createTextVNode(" Gerenciar Permissões ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></nav>`);
  _push(ssrRenderComponent(_component_FlashMessages, null, null, _parent));
  _push(`</div></div><div class="main-content">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><!--]-->`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Layout/Layout.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  name: "PaginationComponent",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalItems: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      default: 10
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.perPage);
    },
    pages() {
      let startPage, endPage;
      if (this.totalPages <= 5) {
        startPage = 1;
        endPage = this.totalPages;
      } else {
        if (this.currentPage <= 3) {
          startPage = 1;
          endPage = 5;
        } else if (this.currentPage + 2 >= this.totalPages) {
          startPage = this.totalPages - 4;
          endPage = this.totalPages;
        } else {
          startPage = this.currentPage - 2;
          endPage = this.currentPage + 2;
        }
      }
      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    }
  },
  methods: {
    goToPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit("page-change", page);
      }
    },
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.goToPage(this.currentPage - 1);
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.goToPage(this.currentPage + 1);
      }
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "Page navigation" }, _attrs))}><ul class="pagination"><li class="${ssrRenderClass([{ disabled: $props.currentPage === 1 }, "page-item"])}"><a class="page-link" href="#">Primeira</a></li><li class="${ssrRenderClass([{ disabled: $props.currentPage === 1 }, "page-item"])}"><a class="page-link" href="#">Anterior</a></li><!--[-->`);
  ssrRenderList($options.pages, (page) => {
    _push(`<li class="${ssrRenderClass([{ active: page === $props.currentPage }, "page-item"])}"><a class="page-link" href="#">${ssrInterpolate(page)}</a></li>`);
  });
  _push(`<!--]--><li class="${ssrRenderClass([{ disabled: $props.currentPage === $options.totalPages }, "page-item"])}"><a class="page-link" href="#">Próxima</a></li><li class="${ssrRenderClass([{ disabled: $props.currentPage === $options.totalPages }, "page-item"])}"><a class="page-link" href="#">Última</a></li></ul></nav>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/Paginator.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Paginator = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Paginator
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  components: {
    Paginator,
    Link
  },
  emits: [
    "destroyRegisterEmit",
    "destroySelectedRegistersEmit",
    "showRegisterEmit",
    "page-change",
    "onShowRegister",
    "editRegister",
    "editPermission"
  ],
  props: {
    requestUrl: String,
    // UR de busca dos registros
    collumnNames: Object,
    // Nomes de cada coluna da tabela
    collumnKeys: Object,
    // chaves de cada registro, sendo uma para cada collumnName
    buttons: Object,
    // Botões de ação: delete, edit e show
    perPage: Number,
    // Quantidade de ítens por página
    searchTitle: String,
    // Placeholder do campo de busca
    checkBoxes: Boolean,
    // Caixas de seleção na tabela
    deleteAllButton: Boolean,
    // Ao selecionar, exibir botão de deletar todos?
    withImage: String
    // Imagem na primeira coluna
  },
  data() {
    return {
      reloadTableValue: true,
      registers: [],
      searchedValue: "",
      selectedPerPage: this.perPage,
      totalRegisters: 0,
      totalPages: 0,
      actualPage: 1,
      checkedAllBoxes: false,
      selectedCheckboxes: []
    };
  },
  methods: {
    async getRegisters() {
      try {
        let registers = await axios.post(this.requestUrl, {
          page: this.actualPage,
          searchedValue: this.searchedValue,
          perPage: this.selectedPerPage
        });
        this.totalRegisters = registers.data.total;
        this.totalPages = Math.ceil(
          this.totalRegisters / this.selectedPerPage
        );
        this.selectedPerPage = registers.data.per_page;
        this.registers = registers.data.data;
        this.actualPage = registers.data.current_page;
      } catch (e) {
        console.log("Erro to reload data: ", e);
      }
    },
    async reloadTable() {
      this.reloadTableValue = !this.reloadTableValue;
      setTimeout(() => {
        this.reloadTableValue = !this.reloadTableValue;
      }, 1);
      setTimeout(() => {
        this.checkBoxesOnReload();
      }, 2);
    },
    async checkBoxesOnReload() {
      let allCheckBoxes = document.querySelectorAll(
        ".select-rows-checkbox"
      );
      let countCheckedBoxes = 0;
      allCheckBoxes.forEach((element) => {
        if (this.selectedCheckboxes.includes(element.id)) {
          element.checked = true;
          countCheckedBoxes++;
        } else {
          element.checked = false;
        }
      });
      if (countCheckedBoxes == this.selectedPerPage) {
        this.checkedAllBoxes = true;
      } else {
        this.checkedAllBoxes = false;
      }
    },
    async alterItemsPerPage(value) {
      this.selectedPerPage = value;
      await this.getRegisters();
      this.reloadTable();
    },
    onSearchValue() {
      this.getRegisters();
    },
    async onPageChange(page) {
      this.actualPage = page;
      await this.getRegisters();
      this.reloadTable();
    },
    onCheckedAllBoxes() {
      this.checkedAllBoxes = !this.checkedAllBoxes;
      let allCheckBoxes = document.querySelectorAll(
        ".select-rows-checkbox"
      );
      allCheckBoxes.forEach((element) => {
        element.checked = this.checkedAllBoxes;
        if (this.checkedAllBoxes) {
          if (!this.selectedCheckboxes.includes(element.id)) {
            this.selectedCheckboxes.push(element.id);
          }
        } else {
          let index = this.selectedCheckboxes.indexOf(element.id);
          if (index != -1) {
            this.selectedCheckboxes.splice(index, 1);
          }
        }
      });
    },
    destroySelectedRegisters() {
      const registersIds = [];
      this.selectedCheckboxes.forEach((id) => {
        let cleanedId = id.replace("checkboxId", "");
        registersIds.push(cleanedId.trim());
      });
      this.$emit("destroySelectedRegistersEmit", registersIds);
    },
    destroyRegister(register) {
      this.$emit("destroyRegisterEmit", register);
    },
    showRegister(register) {
      this.$emit("showRegisterEmit", register);
    },
    editRegister(register) {
      this.$emit("editRegister", register);
    },
    editPermission(register) {
      this.$emit("editPermission", register);
    }
  },
  mounted() {
    this.getRegisters();
  },
  watch: {}
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Paginator = resolveComponent("Paginator");
  _push(`<!--[-->`);
  if ($props.deleteAllButton && $data.selectedCheckboxes.length !== 0) {
    _push(`<div class="row p-0 m-0 justify-start"><div class="p-0 mb-1"><button type="button" class="btn btn-danger bi bi-trash">${ssrInterpolate($data.selectedCheckboxes.length)} Selecionados </button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass("row p-0 m-0 mb-2 d-flex justify-content-between")}"><div class="col-6 p-0 row"><div class="col-6 col-sm-6 col-md-2"><select name="" id="" class="form-control"><option value="5"${ssrIncludeBooleanAttr($props.perPage == 5) ? " selected" : ""}>5</option><option value="10"${ssrIncludeBooleanAttr($props.perPage == 10) ? " selected" : ""}>10</option><option value="20"${ssrIncludeBooleanAttr($props.perPage == 20) ? " selected" : ""}>15</option><option value="50"${ssrIncludeBooleanAttr($props.perPage == 50) ? " selected" : ""}>50</option></select></div><div class="col-6 col-sm-6 col-md-3"><label for="" class="mt-1">por página </label></div></div><div class="col-6 col-sm-6 col-md-3 p-0"><input class="form-control" type="text"${ssrRenderAttr("placeholder", $props.searchTitle ?? "Buscar registros")}${ssrRenderAttr("value", $data.searchedValue)}></div></div>`);
  if ($data.reloadTableValue) {
    _push(`<table class="table table-stripped"><thead><tr class="bg-primary">`);
    if ($props.checkBoxes) {
      _push(`<th><label for="" id="" class="${ssrRenderClass([
        "labelCheckbox",
        $data.checkedAllBoxes ? "checkboxChecked" : ""
      ])}"><input class="${ssrRenderClass(["checkbox", "rounded"])}" type="checkbox" name="checkbox" id="checkboxId"${ssrIncludeBooleanAttr($data.checkedAllBoxes) ? " checked" : ""} style="${ssrRenderStyle({ "width": "16px", "height": "16px", "border-radius": "1em" })}"></label></th>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--[-->`);
    ssrRenderList($props.collumnNames, (collumnName, index) => {
      _push(`<th>${ssrInterpolate(collumnName)}</th>`);
    });
    _push(`<!--]-->`);
    if ($props.buttons) {
      _push(`<th>Ações</th>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</tr></thead>`);
    if ($data.registers.length > 0) {
      _push(`<tbody><!--[-->`);
      ssrRenderList($data.registers, (register, index) => {
        _push(`<tr>`);
        if ($props.checkBoxes) {
          _push(`<td><label for="" id="" class="mb-3"><input class="checkbox labelCheckbox select-rows-checkbox" type="checkbox" name="checkbox"${ssrRenderAttr("id", `checkboxId${register.id}`)} style="${ssrRenderStyle({ "width": "16px", "height": "16px", "border-radius": "1em", "color": "blue" })}"></label></td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList($props.collumnKeys, (collumnKey, index2) => {
          _push(`<td>`);
          if ($props.withImage && index2 === 0) {
            _push(`<img${ssrRenderAttr("width", 30)}${ssrRenderAttr("src", register[$props.withImage])} alt="Capa do livro" srcset="">`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(register[collumnKey])}</td>`);
        });
        _push(`<!--]-->`);
        if ($props.buttons) {
          _push(`<td>`);
          if ($props.buttons.includes("permission")) {
            _push(`<a href="#" class="ml-1 btn btn-outline-warning btn-sm bi bi-key m-1"></a>`);
          } else {
            _push(`<!---->`);
          }
          if ($props.buttons.includes("delete")) {
            _push(`<a href="#" class="ml-1 btn btn-outline-danger btn-sm bi bi-trash m-1"></a>`);
          } else {
            _push(`<!---->`);
          }
          if ($props.buttons.includes("edit")) {
            _push(`<a href="#" class="ml-1 btn btn-outline-warning btn-sm bi bi-pencil m-1"></a>`);
          } else {
            _push(`<!---->`);
          }
          if ($props.buttons.includes("show")) {
            _push(`<a href="#" class="ml-1 btn btn-outline-primary btn-sm bi bi-eye m-1"></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr>`);
      });
      _push(`<!--]--></tbody>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</table>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.registers.length === 0) {
    _push(`<div class="p-0 m-0"><h1 class="text-secondary fs-5 text-center border-none mt-1 ml-0 p-0"> Nenhum registro encontrado </h1><hr></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="d-flex justify-content-between"><div>${ssrInterpolate($data.totalRegisters ?? 0)} registros</div><div>`);
  _push(ssrRenderComponent(_component_Paginator, {
    onPageChange: $options.onPageChange,
    currentPage: $data.actualPage,
    totalItems: $data.totalRegisters,
    perPage: $data.selectedPerPage
  }, null, _parent));
  _push(`</div></div><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/Table.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Table = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Table
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  emits: ["authorSubmited"],
  props: {
    author: Object
  },
  data() {
    return {
      id: null,
      form: {
        name: "",
        state: null
      }
    };
  },
  methods: {
    setState(value) {
      this.form.state = value;
    },
    handleForm() {
      if (!this.author) {
        this.$inertia.post(`authors/store`, this.form);
        this.$emit("authorSubmited");
        $(`#modalNewAuthor`).modal("hide");
      } else {
        this.$inertia.put(`authors/update/${this.id}`, this.form);
        $(`#modalNewAuthor${this.id}`).modal("hide");
        this.$emit("authorSubmited");
      }
    }
  },
  watch: {
    author: {
      immediate: true,
      handler(newAuthor) {
        if (this.author) {
          this.id = newAuthor.id;
          this.form = {
            name: newAuthor.name,
            state: newAuthor.state === "Ativo" ? 1 : 0
          };
        }
      }
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "modal fade",
    id: "modalNewAuthor" + ($props.author ? $props.author.id : ""),
    tabindex: "-1",
    "aria-labelledby": "modalLabel",
    "aria-hidden": "true",
    "data-bs-backdrop": "static"
  }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content p-3"><div class="modal-header"><h5 class="modal-title">${ssrInterpolate($props.author ? "Editar Autor" : "Novo Autor")}</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><form><div class="modal-body"><div class="mb-3"><label for="name" class="form-label">Nome do Autor</label><input type="text" class="form-control" id="name" name="name" placeholder="Digite aqui o nome do autor"${ssrRenderAttr("value", $data.form.name)} required></div><div class="mb-3"><label class="form-label">Estado</label><div class="form-check"><input class="form-check-input" type="radio" name="state" id="stateActive" value="1"${ssrIncludeBooleanAttr($data.form.state == 1) ? " checked" : ""}><label class="form-check-label" for="stateActive"> Ativo </label></div><div class="form-check"><input class="form-check-input" type="radio" name="state" id="stateInactive" value="0"${ssrIncludeBooleanAttr($data.form.state == 0) ? " checked" : ""}><label class="form-check-label" for="stateInactive"> Inativo </label></div></div></div><div class="modal-footer"><button type="button" class="btn btn-primary">${ssrInterpolate($props.author ? "Atualizar" : "Salvar")} <span class="bi bi-save"></span></button></div></form></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/ModalNewAuthor.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ModalNewAuthor = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ModalNewAuthor
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  components: {
    Layout,
    Table,
    ModalNewAuthor
  },
  props: {
    user: Object
  },
  data() {
    return {
      selectedAuthor: null
    };
  },
  methods: {
    onAuthorSubmited() {
      setTimeout(() => {
        this.$refs.tableAuthorseRef.reloadTable();
        this.$refs.tableAuthorseRef.getRegisters();
      }, 25);
    },
    editRegister(author) {
      this.selectedAuthor = author;
      this.$nextTick(() => {
        $(`#modalNewAuthor${author.id}`).modal("show");
      });
    },
    onDestroyRegister(author) {
      if (confirm("Tem certeza que deseja excluir?")) {
        this.$inertia.delete(`/authors/destroy/${author}`, {
          onSuccess: () => {
            this.$refs.tableAuthorseRef.getRegisters();
            this.$refs.tableAuthorseRef.reloadTable();
          },
          onError: () => {
          }
        });
      }
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Table = resolveComponent("Table");
  const _component_ModalNewAuthor = resolveComponent("ModalNewAuthor");
  _push(ssrRenderComponent(_component_Layout, mergeProps({ user: $props.user }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container mt-2"${_scopeId}><div class="row mb-2"${_scopeId}><div class="col-md-12 d-flex justify-content-between align-items-center"${_scopeId}><div${_scopeId}><h2 class="fw-bold text-primary mb-0"${_scopeId}> Lista de Autores </h2><p class="text-muted small"${_scopeId}> Gerencie os autores cadastrados no sistema </p></div><button class="btn btn-primary px-4 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modalNewAuthor"${_scopeId}> Novo Autor <span class="bi bi-plus"${_scopeId}></span></button></div></div></div><div class="container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Table, {
          requestUrl: "/authors/getAuthors",
          collumnNames: ["ID", "Nome", "Estado"],
          collumnKeys: ["id", "name", "state"],
          checkBoxes: false,
          buttons: ["delete", "edit"],
          deleteAllButton: false,
          perPage: 10,
          searchTitle: "Buscar autores",
          onDestroyRegisterEmit: $options.onDestroyRegister,
          onEditRegister: $options.editRegister,
          ref: "tableAuthorseRef"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if ($data.selectedAuthor) {
          _push2(ssrRenderComponent(_component_ModalNewAuthor, {
            author: $data.selectedAuthor,
            onAuthorSubmited: $options.onAuthorSubmited
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_ModalNewAuthor, { onAuthorSubmited: $options.onAuthorSubmited }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "container mt-2" }, [
            createVNode("div", { class: "row mb-2" }, [
              createVNode("div", { class: "col-md-12 d-flex justify-content-between align-items-center" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "fw-bold text-primary mb-0" }, " Lista de Autores "),
                  createVNode("p", { class: "text-muted small" }, " Gerencie os autores cadastrados no sistema ")
                ]),
                createVNode("button", {
                  class: "btn btn-primary px-4 d-flex align-items-center",
                  "data-bs-toggle": "modal",
                  "data-bs-target": "#modalNewAuthor"
                }, [
                  createTextVNode(" Novo Autor "),
                  createVNode("span", { class: "bi bi-plus" })
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "container" }, [
            createVNode(_component_Table, {
              requestUrl: "/authors/getAuthors",
              collumnNames: ["ID", "Nome", "Estado"],
              collumnKeys: ["id", "name", "state"],
              checkBoxes: false,
              buttons: ["delete", "edit"],
              deleteAllButton: false,
              perPage: 10,
              searchTitle: "Buscar autores",
              onDestroyRegisterEmit: $options.onDestroyRegister,
              onEditRegister: $options.editRegister,
              ref: "tableAuthorseRef"
            }, null, 8, ["onDestroyRegisterEmit", "onEditRegister"])
          ]),
          $data.selectedAuthor ? (openBlock(), createBlock(_component_ModalNewAuthor, {
            key: 0,
            author: $data.selectedAuthor,
            onAuthorSubmited: $options.onAuthorSubmited
          }, null, 8, ["author", "onAuthorSubmited"])) : createCommentVNode("", true),
          createVNode(_component_ModalNewAuthor, { onAuthorSubmited: $options.onAuthorSubmited }, null, 8, ["onAuthorSubmited"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Author/Index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  components: {
    FlashMessages
  },
  props: {
    book: {
      type: Object,
      default: null
    },
    authors: {
      type: Array,
      required: true
    }
  },
  emits: ["onBookCreated"],
  data() {
    return {
      form: {
        title: this.book ? this.book.title : "",
        description: this.book ? this.book.description : "",
        publish_date: this.book ? this.book.publish_date : "",
        author_id: this.book ? this.book.author_id : "",
        cover: null
      },
      imagePreview: this.book && this.book.cover ? this.book.cover : null
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.form.cover = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.imagePreview = null;
      }
    },
    handleSubmit() {
      if (this.form.cover === null) {
        delete this.form.cover;
      }
      const formData = new FormData();
      for (const key in this.form) {
        formData.append(key, this.form[key]);
      }
      if (this.book) {
        formData.append("id", this.book.id);
      }
      if (this.book) {
        this.$inertia.post("/books/update/", formData, {
          onSuccess: () => {
            $("#newBookModal" + this.book.id).modal("hide");
            this.$emit("onBookCreated");
          },
          onError: () => {
          }
        });
        return;
      } else {
        this.$inertia.post("/books/store/", formData, {
          onSuccess: () => {
            $("#newBookModal").modal("hide");
            this.$emit("onBookCreated");
          },
          onError: (errors) => {
          }
        });
      }
    }
  },
  watch: {
    book: {
      immediate: true,
      handler(newBook) {
        if (newBook) {
          this.form.title = newBook.title;
          this.form.description = newBook.description;
          this.form.publish_date = newBook.publish_date;
          this.form.author_id = newBook.author_id;
          this.imagePreview = newBook.cover;
        } else {
          this.form.title = "";
          this.form.description = "";
          this.form.publish_date = "";
          this.form.author_id = "";
          this.imagePreview = null;
        }
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FlashMessages = resolveComponent("FlashMessages");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "modal fade",
    id: "newBookModal" + ($props.book ? $props.book.id : ""),
    tabindex: "-1",
    "aria-labelledby": "bookModalLabel",
    "aria-hidden": "true",
    "data-bs-backdrop": "static"
  }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content p-3"><div class="modal-header"><h5 class="modal-title" id="bookModalLabel">${ssrInterpolate($props.book ? "Editar Livro" : "Novo Livro")}</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>`);
  _push(ssrRenderComponent(_component_FlashMessages, null, null, _parent));
  _push(`<form enctype="multipart/form-data"><div class="modal-body"><div class="mb-3"><label for="title" class="form-label">Título</label><input type="text" class="form-control" id="title"${ssrRenderAttr("value", $data.form.title)} placeholder="Digite o título do livro" required></div><div class="mb-3"><label for="description" class="form-label">Descrição</label><textarea class="form-control" id="description" rows="3" placeholder="Digite a descrição do livro" required>${ssrInterpolate($data.form.description)}</textarea></div><div class="mb-3"><label for="publish_date" class="form-label">Data de Lançamento</label><input type="date" class="form-control" id="publish_date"${ssrRenderAttr("value", $data.form.publish_date)} required></div><div class="mb-3"><label for="author_id" class="form-label">Autor</label><select class="form-select" id="author_id" required><option value=""${ssrIncludeBooleanAttr(Array.isArray($data.form.author_id) ? ssrLooseContain($data.form.author_id, "") : ssrLooseEqual($data.form.author_id, "")) ? " selected" : ""}>Selecione um autor</option><!--[-->`);
  ssrRenderList($props.authors, (author) => {
    _push(`<option${ssrRenderAttr("value", author.id)}${ssrIncludeBooleanAttr(Array.isArray($data.form.author_id) ? ssrLooseContain($data.form.author_id, author.id) : ssrLooseEqual($data.form.author_id, author.id)) ? " selected" : ""}>${ssrInterpolate(author.name)}</option>`);
  });
  _push(`<!--]--></select></div><div class="mb-3"><label for="cover" class="form-label">Capa do Livro</label><input type="file" class="form-control" id="cover" accept=".jpg,.jpeg,.png">`);
  if ($data.imagePreview) {
    _push(`<img${ssrRenderAttr("src", $data.imagePreview)} alt="Preview" style="${ssrRenderStyle({ "max-width": "200px", "margin-top": "10px" })}">`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="modal-footer"><button type="submit" class="btn btn-primary">${ssrInterpolate($props.book ? "Atualizar" : "Salvar")} <i class="bi bi-save"></i></button></div></form></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/ModalNewBook.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ModalNewBook = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ModalNewBook
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  props: {
    selectedUser: Object,
    allPermissions: Array
  },
  data() {
    return {
      user: null,
      permissions: [],
      selectedPermissions: []
    };
  },
  watch: {
    selectedUser: {
      immediate: true,
      handler(newUser) {
        this.user = newUser;
        this.updateSelectedPermissions();
      }
    },
    allPermissions: {
      immediate: true,
      handler(newPermissions) {
        this.permissions = newPermissions;
      }
    }
  },
  methods: {
    updateSelectedPermissions() {
      if (this.user && this.user.permissions) {
        this.selectedPermissions = this.user.permissions.map(
          (p) => p.name
        );
      } else {
        this.selectedPermissions = [];
      }
    },
    savePermissions() {
      this.$inertia.put(
        `/users/permissions/sync/${this.user.id}`,
        this.selectedPermissions,
        {
          onSuccess: () => {
            $("#setPermissionModal").modal("hide");
          },
          onError: () => {
          }
        }
      );
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.user) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: "modal fade",
      id: "setPermissionModal",
      tabindex: "-1",
      "aria-labelledby": "bookModalLabel",
      "aria-hidden": "true",
      "data-bs-backdrop": "static"
    }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content p-3"><div class="modal-header"><h5 class="modal-title" id="setPermissionModalLabel"> Gerenciar Permissões - ${ssrInterpolate($data.user.name)} <i class="bi bi-shield-lock"></i></h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><div class="mb-3"><label class="fw-bold mb-2">Permissões Disponíveis:</label><!--[-->`);
    ssrRenderList($data.permissions, (permission) => {
      _push(`<div class="form-check"><input name="permission" class="form-check-input" type="checkbox"${ssrRenderAttr("id", "permission_" + permission.id)}${ssrRenderAttr("value", permission.name)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedPermissions) ? ssrLooseContain($data.selectedPermissions, permission.name) : $data.selectedPermissions) ? " checked" : ""}><label class="form-check-label"${ssrRenderAttr("for", "permission_" + permission.id)}>${ssrInterpolate(permission.name)}</label></div>`);
    });
    _push(`<!--]--></div></div><div class="modal-footer"><button type="button" class="btn btn-primary"> Salvar Permissões </button></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/ModalSetUserPermission.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ModalSetUserPermission = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ModalSetUserPermission
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      return new Date(date).toLocaleDateString("pt-BR", options);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "modal fade",
    id: "showBookModal" + $props.book.id,
    tabindex: "-1",
    "aria-labelledby": "showBookModalLabel",
    "aria-hidden": "true",
    "data-bs-backdrop": "static"
  }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content p-3"><div class="modal-header"><h5 class="modal-title" id="showBookModalLabel"> Detalhes do Livro <i class="bi bi-book mb-3"></i></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">`);
  if ($props.book.cover) {
    _push(`<div class="mb-3"><div class="text-center mb-3"><img${ssrRenderAttr("src", $props.book.cover)} alt="Capa do livro" class="img-fluid rounded mb-3" style="${ssrRenderStyle({ "max-height": "200px" })}"></div></div>`);
  } else {
    _push(`<div class="text-center mb-3"><i class="bi bi-image text-muted" style="${ssrRenderStyle({ "font-size": "100px" })}"></i><p class="text-muted">Sem imagem</p></div>`);
  }
  _push(`<div class="mb-3"><label class="fw-bold">Título:</label><p>${ssrInterpolate($props.book.title)}</p></div><div class="mb-3"><label class="fw-bold">Descrição:</label><p>${ssrInterpolate($props.book.description)}</p></div><div class="mb-3"><label class="fw-bold">Data de Lançamento:</label><p>${ssrInterpolate($options.formatDate($props.book.publish_date))}</p></div><div class="mb-3"><label class="fw-bold">Autor:</label>`);
  if ($props.book.author.name) {
    _push(`<p>${ssrInterpolate($props.book.author.name)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Components/ModalShowBook.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ModalShowBook = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ModalShowBook
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  props: {
    user: Object,
    books: Array,
    authors: Object
  },
  components: {
    Layout,
    ModalNewBook,
    Table,
    ModalShowBook
  },
  data() {
    return {
      showBookModal: false,
      newBookModal: false,
      selectedBook: null,
      selectedShowBook: null
    };
  },
  emits: ["onBookCreated"],
  methods: {
    showRegisterEmit(book) {
      this.selectedShowBook = book;
      this.$nextTick(() => {
        $("#showBookModal" + book.id).modal("show");
      });
    },
    editRegister(book) {
      this.selectedBook = book;
      this.$nextTick(() => {
        $(`#newBookModal${book.id}`).modal("show");
      });
    },
    onBookCreated() {
      this.$refs.tableRef.getRegisters();
      this.$refs.tableRef.reloadTable();
    },
    onDestroyRegister(book) {
      if (confirm("Tem certeza que deseja excluir este livro?")) {
        this.$inertia.delete(`/books/destroy/${book}`);
        this.$refs.tableRef.getRegisters();
        this.$refs.tableRef.reloadTable();
      }
    }
  },
  mounted() {
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Table = resolveComponent("Table");
  const _component_ModalShowBook = resolveComponent("ModalShowBook");
  const _component_ModalNewBook = resolveComponent("ModalNewBook");
  _push(ssrRenderComponent(_component_Layout, mergeProps({ user: $props.user }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="container mt-2"${_scopeId}><div class="row mb-2"${_scopeId}><div class="col-md-12 d-flex justify-content-between align-items-center"${_scopeId}><div${_scopeId}><h2 class="fw-bold text-primary mb-0"${_scopeId}> Lista de Livros </h2><p class="text-muted small"${_scopeId}> Gerencie os livros cadastrados no sistema </p></div><button class="btn btn-primary px-4 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#newBookModal"${_scopeId}> Novo Livro <span class="bi bi-plus"${_scopeId}></span></button></div></div></div><div class="container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Table, {
          requestUrl: "/books/getBooks",
          collumnNames: ["Titulo", "Autor"],
          collumnKeys: ["title", "author_name"],
          checkBoxes: false,
          buttons: ["delete", "edit", "show"],
          deleteAllButton: false,
          perPage: 10,
          searchTitle: "Buscar livros",
          onDestroyRegisterEmit: $options.onDestroyRegister,
          onShowRegisterEmit: $options.showRegisterEmit,
          onEditRegister: $options.editRegister,
          ref: "tableRef",
          withImage: "cover"
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
        if ($data.selectedShowBook) {
          _push2(ssrRenderComponent(_component_ModalShowBook, { book: $data.selectedShowBook }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_ModalNewBook, {
          authors: $props.authors,
          onOnBookCreated: $options.onBookCreated
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ModalNewBook, {
          "v-if": $data.selectedBook,
          authors: $props.authors,
          book: $data.selectedBook,
          onOnBookCreated: $options.onBookCreated
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { class: "container mt-2" }, [
              createVNode("div", { class: "row mb-2" }, [
                createVNode("div", { class: "col-md-12 d-flex justify-content-between align-items-center" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "fw-bold text-primary mb-0" }, " Lista de Livros "),
                    createVNode("p", { class: "text-muted small" }, " Gerencie os livros cadastrados no sistema ")
                  ]),
                  createVNode("button", {
                    class: "btn btn-primary px-4 d-flex align-items-center",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#newBookModal"
                  }, [
                    createTextVNode(" Novo Livro "),
                    createVNode("span", { class: "bi bi-plus" })
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "container" }, [
              createVNode(_component_Table, {
                requestUrl: "/books/getBooks",
                collumnNames: ["Titulo", "Autor"],
                collumnKeys: ["title", "author_name"],
                checkBoxes: false,
                buttons: ["delete", "edit", "show"],
                deleteAllButton: false,
                perPage: 10,
                searchTitle: "Buscar livros",
                onDestroyRegisterEmit: $options.onDestroyRegister,
                onShowRegisterEmit: $options.showRegisterEmit,
                onEditRegister: $options.editRegister,
                ref: "tableRef",
                withImage: "cover"
              }, null, 8, ["onDestroyRegisterEmit", "onShowRegisterEmit", "onEditRegister"])
            ])
          ]),
          $data.selectedShowBook ? (openBlock(), createBlock(_component_ModalShowBook, {
            key: 0,
            book: $data.selectedShowBook
          }, null, 8, ["book"])) : createCommentVNode("", true),
          createVNode(_component_ModalNewBook, {
            authors: $props.authors,
            onOnBookCreated: $options.onBookCreated
          }, null, 8, ["authors", "onOnBookCreated"]),
          createVNode(_component_ModalNewBook, {
            "v-if": $data.selectedBook,
            authors: $props.authors,
            book: $data.selectedBook,
            onOnBookCreated: $options.onBookCreated
          }, null, 8, ["v-if", "authors", "book", "onOnBookCreated"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  components: {
    Layout,
    Table,
    ModalSetUserPermission
  },
  props: {
    user: Object,
    permissions: Object
  },
  data() {
    return {
      selectedUser: null
    };
  },
  methods: {
    onEditPermission(__user) {
      this.selectedUser = __user;
      this.$nextTick(() => {
        $("#setPermissionModal").modal("show");
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Table = resolveComponent("Table");
  const _component_ModalSetUserPermission = resolveComponent("ModalSetUserPermission");
  _push(ssrRenderComponent(_component_Layout, mergeProps({ user: $props.user }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container mt-2"${_scopeId}><div class="row mb-2"${_scopeId}><div class="col-md-12 d-flex justify-content-between align-items-center"${_scopeId}><div${_scopeId}><h2 class="fw-bold text-primary mb-0"${_scopeId}> Lista de Usuários </h2><p class="text-muted small"${_scopeId}> Gerencie a pemissão dos usuários </p></div></div></div></div><div class="container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Table, {
          requestUrl: "/users/getUsers",
          collumnNames: ["Nome", "Email"],
          collumnKeys: ["name", "email"],
          checkBoxes: false,
          deleteAllButton: false,
          perPage: 10,
          searchTitle: "Buscar usuários",
          buttons: ["permission"],
          onEditPermission: $options.onEditPermission
        }, null, _parent2, _scopeId));
        if ($data.selectedUser) {
          _push2(ssrRenderComponent(_component_ModalSetUserPermission, {
            selectedUser: $data.selectedUser,
            allPermissions: $props.permissions
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "container mt-2" }, [
            createVNode("div", { class: "row mb-2" }, [
              createVNode("div", { class: "col-md-12 d-flex justify-content-between align-items-center" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "fw-bold text-primary mb-0" }, " Lista de Usuários "),
                  createVNode("p", { class: "text-muted small" }, " Gerencie a pemissão dos usuários ")
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "container" }, [
            createVNode(_component_Table, {
              requestUrl: "/users/getUsers",
              collumnNames: ["Nome", "Email"],
              collumnKeys: ["name", "email"],
              checkBoxes: false,
              deleteAllButton: false,
              perPage: 10,
              searchTitle: "Buscar usuários",
              buttons: ["permission"],
              onEditPermission: $options.onEditPermission
            }, null, 8, ["onEditPermission"]),
            $data.selectedUser ? (openBlock(), createBlock(_component_ModalSetUserPermission, {
              key: 0,
              selectedUser: $data.selectedUser,
              allPermissions: $props.permissions
            }, null, 8, ["selectedUser", "allPermissions"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": __vite_glob_0_0, "./Pages/Auth/Register.vue": __vite_glob_0_1, "./Pages/Author/Index.vue": __vite_glob_0_2, "./Pages/Components/FlashMessages.vue": __vite_glob_0_3, "./Pages/Components/ModalNewAuthor.vue": __vite_glob_0_4, "./Pages/Components/ModalNewBook.vue": __vite_glob_0_5, "./Pages/Components/ModalSetUserPermission.vue": __vite_glob_0_6, "./Pages/Components/ModalShowBook.vue": __vite_glob_0_7, "./Pages/Components/Paginator.vue": __vite_glob_0_8, "./Pages/Components/Table.vue": __vite_glob_0_9, "./Pages/Dashboard/Index.vue": __vite_glob_0_10, "./Pages/Layout/Layout.vue": __vite_glob_0_11, "./Pages/Users/Index.vue": __vite_glob_0_12 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
