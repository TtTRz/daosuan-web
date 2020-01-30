import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  cssLoaderOptions: {
    localIdentName:'[local]',
  },

  manifest: {
    basePath: '/',
  },

  proxy: {
    '/server/api/': {
      target: 'https://api.fh.shoogoome.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/server/api/': '',
      },
    },
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'DAOSUAN',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
