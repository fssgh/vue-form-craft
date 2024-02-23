import login from './login'
import register from './register'
import article from './article'
import linkage1 from './linkage1'
import linkage2 from './linkage2'
import formList from './formList'

export default [
  { name: '登陆账号', schema: login, id: 'login' },
  { name: '注册账号', schema: register, id: 'register' },
  { name: '写文章', schema: article, id: 'article' },
  { name: '自增组件', schema: formList, id: 'formList' },
  { name: '联动案例1', schema: linkage1, id: 'linkage1' },
  { name: '联动案例2', schema: linkage2, id: 'linkage2' }
]
