# qiankun-nextjs
## 简介
> qiankun以nextJS为基座来搭建 微前端应用
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
### registerMicroApps 描述
> path: micro-nextjs/components/Micro/index.tsx

* sub-react  -> git@github.com:thorneLew/sub-react.git
* sub-react1 ->  git@github.com:thorneLew/sub-react.git sub-react1
* sub-react2 -> git clone git@github.com:thorneLew/web3-react-cra.git

```bash
# eg:  cat package.json
cd sub-react
yarn start
```

### 
1. 微前端解决了什么问题
	1. 拆分和细化：
		> 当下前端领域，单页面应用（SPA）是非常流行的项目形态之一，而随着时间的推移以及应用功能的丰富，单页应用变得不再单一而是越来越庞大也越来越难以维护，往往是改一处而动全身，由此带来的发版成本也越来越高。微前端的意义就是将这些庞大应用进行拆分，并随之解耦，每个部分可以单独进行维护和部署，提升效率。
	2. 整合历史系统：
		> 在不少的业务中，或多或少会存在一些历史项目，这些项目大多以采用老框架类似（Backbone.js，Angular.js 1）的B端管理系统为主，介于日常运营，这些系统需要结合到新框架中来使用还不能抛弃，对此我们也没有理由浪费时间和精力重写旧的逻辑。而微前端可以将这些系统进行整合，在基本不修改来逻辑的同时来同时兼容新老两套系统并行运行。
	3. 供三方项目集成部分应用
	

### 参考文档
1. [qiankun官网](https://qiankun.umijs.org/zh)
2. [qiankun微前端主子应用通信方案](https://codeleading.com/article/36666081800/)