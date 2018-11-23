exports.decorateConfig = (config) => {
    const DARK_BLUE = '#001133';
    const ELECTRIC_BLUE = '#009ce6';
    const CYAN = '#00FFFF';
    const WHITE_BLUE = '#EEFFFF';

    return Object.assign({}, config, {
        backgroundColor: DARK_BLUE,
        foregroundColor: WHITE_BLUE,
        borderColor: ELECTRIC_BLUE,
        cursorColor: CYAN,
        css: `
            ${config.css || ''}
            .tabs_nav .tabs_list .tab_text {
                color: #009ce6;
            }
            .tab_textActive {
              color: #00FFFF !important;
              font-weight: bold;
            }
            `
  });
}
