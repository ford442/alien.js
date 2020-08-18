import { NoBlending, RawShaderMaterial, Uniform, Vector2 } from 'three';

import vertexShader from '../shaders/BlurPass.vert.js';
import fragmentShader from '../shaders/BlurPass.frag.js';

export class BlurMaterial extends RawShaderMaterial {
    constructor(direction = new Vector2(0.5, 0.5)) {
        super({
            uniforms: {
                tMap: new Uniform(null),
                uBluriness: new Uniform(1),
                uDirection: new Uniform(direction),
                uResolution: new Uniform(new Vector2())
            },
            vertexShader,
            fragmentShader,
            blending: NoBlending,
            depthWrite: false,
            depthTest: false
        });
    }
}

export const BlurDirectionX = new Vector2(1, 0);
export const BlurDirectionY = new Vector2(0, 1);
