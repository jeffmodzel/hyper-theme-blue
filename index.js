exports.decorateConfig = (config) => {
    const DARK_BLUE = '#001133';
    const ELECTRIC_BLUE = '#009ce6';
    const CYAN = '#00FFFF';
    const WHITE_BLUE = '#EEFFFF';

    const backgroundColor = DARK_BLUE;
    const foregroundColor = WHITE_BLUE;

    return Object.assign({}, config, {
      foregroundColor,
		  backgroundColor,
      borderColor: ELECTRIC_BLUE,
      cursorColor: CYAN,
      css: `
            ${config.css || ''}
            .tabs_nav .tabs_list .tab_text {
                color: #00FFFF;
            }
            .tabs_nav .tabs_title {
                color: #00FFFF;
            }
            `
  });
}
