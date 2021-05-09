import { isAccessDenied } from "../utils/auth";

export default {
  beforeUpdate() {
    const isAuth = this.$store.getters["getAuth"];
    const user = this.$store.getters["getUser"];
    const permissions = this.$route.meta.roles;

    if (isAuth && isAccessDenied(user, permissions)) {
      this.$router.push("/401");
    }
  },
};
