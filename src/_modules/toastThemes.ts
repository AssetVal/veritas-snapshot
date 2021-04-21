export const toastThemes = {
  success: {
    theme: {
      '--toastBackground': 'rgba(166,239,184,.9)',
      '--toastColor': 'rgba(0,0,0,.6)',
      '--toastProgressBackground': 'rgba(120,208,148,0.9)'
    }
  },
  error: {
    duration: 7000,
    theme: {
      '--toastBackground': 'rgba(243,172,177,0.9)',
      '--toastColor': 'rgba(0,0,0, .9)',
      '--toastProgressBackground': 'rgba(226,102,111,0.8)'
    }
  }
}

export default toastThemes;
