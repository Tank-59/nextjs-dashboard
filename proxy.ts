import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};


//这里使用 authConfig 对象初始化 NextAuth.js，并导出 auth 属性。还使用了 Proxy 的 matcher 选项来指定它应该在特定路径上运行。
// 受保护的路由甚至不会开始渲染，直到代理验证身份验证为止，从而提高了应用程序的安全性和性能。