import '@mdi/font/css/materialdesignicons.css';
// import 'vuetify/styles';
import 'vuetify/styles/main.sass';
import { createVuetify } from 'vuetify'
import { UserModule } from '~/types';

// https://github.com/vuetifyjs/vuetify/
export const install: UserModule = ({ app }) => {
  const vuetify = createVuetify();
  app.use(vuetify);
};
export default install;
