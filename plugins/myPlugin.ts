export default defineNuxtPlugin((nuxtApp) =>{
    return {
        provide: {
            message:(msg:string) => console.log(`Hello ${msg}`),
            secondMessage:(msg:string) => console.log(`HI ${msg}`),
        }
    }
})