varying vec2 vUv;
uniform float time;
varying float vProgress;

void main() {
  vUv = uv;
  vProgress = smoothstep(-1., 1., sin(vUv.x*8. + time*3.));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}