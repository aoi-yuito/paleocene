uniform float time;
uniform vec3 color;
varying vec2 vUv;
varying float vProgress;

void main() {
  vec3 finalColor = mix(color, color*0.25, vProgress);
  float hideCorners = smoothstep(1., 0.9, vUv.x);
  float hideCorners2 = smoothstep(0., 0.1, vUv.x);

  gl_FragColor.rgba = vec4(vec3(vProgress), 1.);
  gl_FragColor.rgba = vec4(finalColor, hideCorners*hideCorners2);
}