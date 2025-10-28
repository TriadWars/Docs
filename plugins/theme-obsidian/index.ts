import type { StarlightPlugin } from '@astrojs/starlight/types';
const plugin_dir = './plugins/theme-obsidian';

export default function plugin(): StarlightPlugin {
    return {
        name: 'starlight-theme-obsidian',
        hooks: {
            setup: async (args) => {
                const { config, logger, updateConfig } = args;
                
                const customCss: typeof config.customCss = [ `${plugin_dir}/styles/common.css` ];

                const componentOverrides: typeof config.components = {};

                const overridableComponents = [ 'Sidebar', 'PageFrame', 'Pagination', 'ThemeSelect', 'PageSidebar', 'Footer' ];
                for (const component of overridableComponents) {
                    if (config.components?.[component]) {
                        logger.warn(
                            `It looks like you already have a \`${component}\` component override in your Starlight configuration.`,
                        );
                    } else {
                        componentOverrides[component] = `${plugin_dir}/components/${component}.astro`;
                    }
                }

                updateConfig({
                    components: {
                        ...componentOverrides,
                        ...config.components,
                    },
                    customCss: [...customCss, ...(config.customCss ?? [])],
                });
            },
        },
    };
}
