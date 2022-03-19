export const getDeviceType = () => {
    const ua = navigator.userAgent;
    const browserWidth = window.screen.width;
    console.log(browserWidth)
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };

  export const getDeviceWidth = () => window.screen.width;