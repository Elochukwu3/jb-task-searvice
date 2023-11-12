
const randomString = (length=9)=>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for(let i= 0; i < length; i++ ){
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result;
}
 
export const testimonial = [
  { id: randomString (),
    title: "Seamless Symmetry, Seamless Satisfaction!",
   content: "Skeptical at first, but JPPromend delivered on its promise. My screen went from chaos to calm in seconds. The satisfaction of a seamless visual experience – truly unmatched!" 
    },
  {
    id: randomString (),
    title: "A Click, A Fix, A Wow – Thank You, JPPromend!",
    content:
      "Clicked for a fix, got a wow! JPPromend's speedy solutions amazed me. My TV is now a source of wow moments. Grateful for the incredible service!",
  },
  { 
    id: randomString (),
    title: "From Fuzzy to Fantastic – JPPromend Delivers!", 
  content: "My TV was plagued with fuzziness until JPPromend stepped in. The transformation was unbelievable – crystal-clear visuals now dominate my screen. Highly recommend" 
},
];
