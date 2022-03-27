import 'storybook-addon-jsx/register';
import '@storybook/addon-controls/register';
import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme,
});
