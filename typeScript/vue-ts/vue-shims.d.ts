// 用于转换vue中加载ts的配置
// 放于 src/vue-shims.d.ts
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
