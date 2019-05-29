import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const filename = 'create-big-bang.js';
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: [
    {
      file: `lib/${filename}`,
      format: 'cjs',
    },
    {
      file: `es/${filename}`,
      format: 'esm',
    },
    {
      name: 'CreateBigBang',
      file: `umd/${filename}`,
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    production && terser(),
  ],
};
