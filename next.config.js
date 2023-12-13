const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.plugins.push(
            new webpack.IgnorePlugin({
                resourceRegExp: /^(fs|net|dns|child_process|tls)$/,
            })
          );
        }
    
        return config;
    }
}

module.exports = nextConfig
