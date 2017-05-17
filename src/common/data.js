/**
 * Created by Administrator on 2017/4/26.
 */
import fillzero from './fillzero'
const date=(input)=>{
    let d=new Date()
    d.setTime(input)
    return `
            ${d.getFullYear()}年：
            ${fillzero(d.getMonth()+1)}月：
            ${fillzero(d.getDay())}日
             ${fillzero(d.getHours())}：
              ${fillzero(d.getMinutes())}：
              ${fillzero(d.getSeconds())}
    `
}
export default date