import { proxy } from "valtio";


const state = proxy({
    intro: true,
    color: '#EFBD49',
    inLogoTexture: true,
    inFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state;