/* @ds-bundle: {"format":4,"namespace":"TLVPatientCareDesignSystem_158230","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ICON_CDN","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Steps","sourcePath":"components/navigation/Steps.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"785a77d8cd4b","components/core/Button.jsx":"faaa2fa1dc55","components/core/Card.jsx":"675b753bd422","components/core/Icon.jsx":"bd3d10ecd1e4","components/core/IconButton.jsx":"1247679183dd","components/core/Tag.jsx":"50b0b9a17044","components/core/Wordmark.jsx":"a2387026509e","components/feedback/Alert.jsx":"3b283614f47d","components/feedback/Dialog.jsx":"7607a6aa4508","components/feedback/Tooltip.jsx":"48b5e4b5ffb9","components/forms/Checkbox.jsx":"04c5fbfa54ac","components/forms/Field.jsx":"05a8fe06c1f6","components/forms/Input.jsx":"05fa3dbc61bd","components/forms/Radio.jsx":"75c1d81e0da9","components/forms/Select.jsx":"748569c541b4","components/forms/Switch.jsx":"7bee3c449d8b","components/forms/Textarea.jsx":"b244c56fc00c","components/navigation/Accordion.jsx":"7b6265de1beb","components/navigation/Steps.jsx":"9bee955979d2","components/navigation/Tabs.jsx":"85ce37e9a9f4","ui_kits/portal/Shell.jsx":"9feb998dc79b","ui_kits/portal/Views.jsx":"03c2fedc9e58","ui_kits/website/Chrome.jsx":"632bd1ac0bbe","ui_kits/website/Pages.jsx":"005b4ba60209"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TLVPatientCareDesignSystem_158230 = window.TLVPatientCareDesignSystem_158230 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
/* Lucide, delivered as a CSS mask so a single component can tint any glyph with
   the current text colour. The same 36 glyphs are vendored in assets/icons/ —
   point `base` at that folder to run offline. */
const ICON_CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/';
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  base = ICON_CDN,
  label,
  style,
  ...rest
}) {
  const url = `url("${base}${name}.svg")`;
  return React.createElement('span', {
    role: label ? 'img' : 'presentation',
    'aria-label': label,
    'aria-hidden': label ? undefined : 'true',
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { ICON_CDN, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  brand: ['var(--teal-50)', 'var(--teal-800)', 'var(--teal-200)'],
  success: ['var(--success-soft)', 'var(--success-ink)', 'var(--green-200)'],
  info: ['var(--info-soft)', 'var(--info-ink)', 'var(--lagoon-200)'],
  warning: ['var(--warning-soft)', 'var(--warning-ink)', '#e8cf9d'],
  danger: ['var(--danger-soft)', 'var(--danger-ink)', '#eebfb8'],
  neutral: ['var(--warm-50)', 'var(--warm-700)', 'var(--warm-200)']
};
function Badge({
  children,
  tone = 'brand',
  icon,
  size = 'md',
  style
}) {
  const [bg, fg, bd] = TONES[tone] || TONES.brand;
  const sm = size === 'sm';
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: sm ? '4px 10px' : '6px 14px',
      background: bg,
      color: fg,
      border: `1px solid ${bd}`,
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-small-role)',
      fontSize: sm ? 'var(--size-caption)' : 'var(--size-small)',
      fontWeight: 'var(--weight-semibold)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon ? React.createElement(__ds_scope.Icon, {
    key: 'i',
    name: icon,
    size: sm ? 15 : 17
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padX: '20px',
    font: 'var(--size-small)',
    icon: 20
  },
  md: {
    height: 'var(--control-h)',
    padX: 'var(--control-pad-x)',
    font: 'var(--size-body)',
    icon: 22
  },
  lg: {
    height: 'var(--control-h-lg)',
    padX: '34px',
    font: 'var(--size-body-lg)',
    icon: 24
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--text-inverse)',
    border: '2px solid var(--brand)'
  },
  accent: {
    background: 'var(--accent)',
    color: 'var(--accent-ink)',
    border: '2px solid var(--accent)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--teal-700)',
    border: '2px solid var(--teal-300)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--teal-700)',
    border: '2px solid transparent'
  },
  danger: {
    background: 'var(--danger)',
    color: 'var(--text-inverse)',
    border: '2px solid var(--danger)'
  },
  inverse: {
    background: 'var(--warm-0)',
    color: 'var(--teal-800)',
    border: '2px solid var(--warm-0)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--brand-hover)',
    borderColor: 'var(--brand-hover)'
  },
  accent: {
    background: 'var(--accent-hover)',
    borderColor: 'var(--accent-hover)'
  },
  secondary: {
    background: 'var(--teal-50)',
    borderColor: 'var(--teal-400)'
  },
  ghost: {
    background: 'var(--teal-50)'
  },
  danger: {
    background: 'var(--clay-700)',
    borderColor: 'var(--clay-700)'
  },
  inverse: {
    background: 'var(--teal-50)',
    borderColor: 'var(--teal-50)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  as = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md,
    v = VARIANTS[variant] || VARIANTS.primary;
  const css = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    height: s.height,
    padding: `0 ${s.padX}`,
    width: fullWidth ? '100%' : undefined,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: s.font,
    letterSpacing: 'var(--tracking-snug)',
    lineHeight: 1,
    textDecoration: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-control)',
    boxShadow: hover && !disabled ? 'var(--shadow-sm)' : 'none',
    transform: press ? 'var(--press-scale)' : hover && !disabled ? 'var(--lift-hover)' : 'none',
    opacity: disabled ? .45 : 1,
    ...v,
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style
  };
  return React.createElement(as, {
    disabled: as === 'button' ? disabled : undefined,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    ...rest
  }, iconLeft ? React.createElement(__ds_scope.Icon, {
    key: 'l',
    name: iconLeft,
    size: s.icon
  }) : null, React.createElement('span', {
    key: 't'
  }, children), iconRight ? React.createElement(__ds_scope.Icon, {
    key: 'r',
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  title,
  eyebrow,
  icon,
  accent,
  tone = 'default',
  interactive,
  footer,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    },
    soft: {
      background: 'var(--surface-brand-soft)',
      border: '1px solid var(--teal-100)'
    },
    accent: {
      background: 'var(--surface-accent-soft)',
      border: '1px solid var(--green-100)'
    },
    deep: {
      background: 'var(--surface-brand-deep)',
      border: '1px solid var(--teal-800)',
      color: 'var(--warm-100)'
    },
    plum: {
      background: 'var(--surface-plum)',
      border: '1px solid var(--plum-700)',
      color: 'var(--plum-100)'
    }
  };
  const reversed = tone === 'deep' || tone === 'plum';
  return React.createElement('div', {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-7)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: interactive && hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: interactive && hover ? 'var(--lift-hover)' : 'none',
      transition: 'var(--transition-surface)',
      cursor: interactive ? 'pointer' : 'default',
      ...tones[tone],
      ...style
    },
    ...rest
  }, accent ? React.createElement('span', {
    key: 'a',
    style: {
      position: 'absolute',
      insetInlineStart: 0,
      insetBlockStart: 0,
      width: '100%',
      height: 'var(--rule-brand)',
      background: 'var(--gradient-hope)'
    }
  }) : null, icon ? React.createElement('span', {
    key: 'i',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: reversed ? 'rgba(255,255,255,.12)' : 'var(--teal-50)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: reversed ? 'var(--seafoam-300)' : 'var(--brand)'
  })) : null, eyebrow ? React.createElement('span', {
    key: 'e',
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: reversed ? 'var(--seafoam-300)' : 'var(--teal-600)'
    }
  }, eyebrow) : null, title ? React.createElement('h3', {
    key: 't',
    style: {
      font: 'var(--text-h4)',
      color: reversed ? 'var(--warm-0)' : 'var(--text-strong)',
      margin: 0
    }
  }, title) : null, React.createElement('div', {
    key: 'c',
    style: {
      font: 'var(--text-body-role)',
      color: reversed ? tone === 'plum' ? 'var(--plum-100)' : 'var(--teal-100)' : 'var(--text-body)'
    }
  }, children), footer ? React.createElement('div', {
    key: 'f',
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-4)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const S = {
  sm: 48,
  md: 56,
  lg: 64
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = S[size] || S.md;
  const base = {
    ghost: {
      background: 'transparent',
      color: 'var(--teal-700)'
    },
    soft: {
      background: 'var(--teal-50)',
      color: 'var(--teal-700)'
    },
    solid: {
      background: 'var(--brand)',
      color: 'var(--text-inverse)'
    },
    inverse: {
      background: 'rgba(255,255,255,.14)',
      color: 'var(--warm-0)'
    }
  }[variant];
  const hov = {
    ghost: {
      background: 'var(--teal-50)'
    },
    soft: {
      background: 'var(--teal-100)'
    },
    solid: {
      background: 'var(--brand-hover)'
    },
    inverse: {
      background: 'rgba(255,255,255,.26)'
    }
  }[variant];
  return React.createElement('button', {
    'aria-label': label,
    disabled,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'var(--transition-control)',
      ...base,
      ...(hover && !disabled ? hov : null),
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 22 : 24
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected,
  onRemove,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('span', {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      minHeight: '40px',
      padding: '0 16px',
      background: selected ? 'var(--teal-600)' : hover && onClick ? 'var(--teal-50)' : 'var(--surface-card)',
      color: selected ? 'var(--text-inverse)' : 'var(--teal-700)',
      border: `2px solid ${selected ? 'var(--teal-600)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-small-role)',
      fontWeight: 'var(--weight-semibold)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }, children, onRemove ? React.createElement('button', {
    key: 'x',
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    'aria-label': 'Remove',
    style: {
      display: 'inline-flex',
      border: 0,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: 'inherit'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
/* No logo file was supplied by the client, so the identity is typographic:
   "TLV" set tight in Elms Sans with the descriptor beneath or beside it. */
function Wordmark({
  form = 'long',
  color,
  size = 28,
  align = 'row',
  style
}) {
  const label = {
    legal: 'TLV Patient Care Consultants, LLC',
    long: 'TLV Patient Care Consultants',
    medium: 'TLV Patient Care',
    short: 'TLV'
  }[form];
  const [tlv, ...restWords] = label.split(' ');
  const rest = restWords.join(' ');
  const ink = color || 'var(--teal-800)';
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      flexDirection: align === 'stack' ? 'column' : 'row',
      alignItems: align === 'stack' ? 'flex-start' : 'baseline',
      gap: align === 'stack' ? '2px' : '10px',
      fontFamily: 'var(--font-display)',
      color: ink,
      lineHeight: 1.05,
      ...style
    }
  }, React.createElement('span', {
    key: 'a',
    style: {
      fontWeight: 'var(--weight-extrabold)',
      fontSize: size,
      letterSpacing: '-0.03em'
    }
  }, tlv), rest ? React.createElement('span', {
    key: 'b',
    style: {
      fontWeight: 'var(--weight-medium)',
      fontSize: align === 'stack' ? size * 0.42 : size * 0.62,
      letterSpacing: align === 'stack' ? 'var(--tracking-caps)' : 'var(--tracking-snug)',
      textTransform: align === 'stack' ? 'uppercase' : 'none',
      opacity: .88
    }
  }, rest) : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  info: {
    bg: 'var(--info-soft)',
    bd: 'var(--lagoon-200)',
    fg: 'var(--info-ink)',
    icon: 'info'
  },
  success: {
    bg: 'var(--success-soft)',
    bd: 'var(--green-200)',
    fg: 'var(--success-ink)',
    icon: 'circle-check'
  },
  warning: {
    bg: 'var(--warning-soft)',
    bd: '#e8cf9d',
    fg: 'var(--warning-ink)',
    icon: 'triangle-alert'
  },
  danger: {
    bg: 'var(--danger-soft)',
    bd: '#eebfb8',
    fg: 'var(--danger-ink)',
    icon: 'triangle-alert'
  },
  reassure: {
    bg: 'var(--surface-brand-soft)',
    bd: 'var(--teal-200)',
    fg: 'var(--teal-800)',
    icon: 'heart-handshake'
  }
};
function Alert({
  children,
  title,
  tone = 'info',
  icon,
  onDismiss,
  action,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return React.createElement('div', {
    role: tone === 'danger' ? 'alert' : 'status',
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
      padding: 'var(--space-5) var(--space-6)',
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    key: 'i',
    name: icon || t.icon,
    size: 26,
    color: t.fg,
    style: {
      marginTop: 2
    }
  }), React.createElement('div', {
    key: 'b',
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, title ? React.createElement('strong', {
    style: {
      font: 'var(--text-h5)',
      color: t.fg
    }
  }, title) : null, React.createElement('div', {
    style: {
      font: 'var(--text-body-role)',
      color: 'var(--text-body)'
    }
  }, children), action ? React.createElement('div', {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action) : null), onDismiss ? React.createElement('button', {
    key: 'x',
    onClick: onDismiss,
    'aria-label': 'Dismiss',
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 6,
      display: 'flex',
      color: t.fg
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 22
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 560,
  style
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)',
      background: 'rgba(10,50,58,.48)',
      backdropFilter: 'blur(3px)'
    },
    onClick: onClose
  }, React.createElement('div', {
    role: 'dialog',
    'aria-modal': 'true',
    'aria-label': title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-overlay)',
      overflow: 'hidden',
      ...style
    }
  }, React.createElement('div', {
    key: 'g',
    style: {
      height: 'var(--rule-brand)',
      background: 'var(--gradient-hope)'
    }
  }), React.createElement('div', {
    key: 'h',
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-7) var(--space-7) 0'
    }
  }, React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, React.createElement('h3', {
    style: {
      font: 'var(--text-h3)',
      margin: 0
    }
  }, title), description ? React.createElement('p', {
    style: {
      font: 'var(--text-body-role)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description) : null), onClose ? React.createElement(__ds_scope.IconButton, {
    icon: 'x',
    label: 'Close',
    size: 'sm'
  }) : null), children ? React.createElement('div', {
    key: 'b',
    style: {
      padding: 'var(--space-6) var(--space-7)'
    }
  }, children) : null, footer ? React.createElement('div', {
    key: 'f',
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      padding: 'var(--space-5) var(--space-7)',
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 10px)'
  } : {
    bottom: 'calc(100% + 10px)'
  };
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show ? React.createElement('span', {
    role: 'tooltip',
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      zIndex: 40,
      padding: '10px 14px',
      maxWidth: 280,
      width: 'max-content',
      background: 'var(--teal-900)',
      color: 'var(--warm-0)',
      font: 'var(--text-small-role)',
      lineHeight: 'var(--leading-normal)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-lg)',
      pointerEvents: 'none',
      ...style
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      minHeight: 'var(--tap-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, React.createElement('input', {
    key: 'i',
    type: 'checkbox',
    checked: !!checked,
    disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), React.createElement('span', {
    key: 'b',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      width: 28,
      height: 28,
      marginTop: 2,
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--brand)' : 'var(--surface-card)',
      border: `2px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
      transition: 'var(--transition-control)'
    }
  }, checked ? React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 20,
    color: 'var(--warm-0)'
  }) : null), React.createElement('span', {
    key: 't',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-body-role)',
      color: 'var(--text-body)'
    }
  }, label), description ? React.createElement('span', {
    style: {
      font: 'var(--text-small-role)',
      color: 'var(--text-muted)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label ? React.createElement('label', {
    key: 'l',
    htmlFor,
    style: {
      font: 'var(--text-body-role)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required ? React.createElement('span', {
    key: 'r',
    style: {
      color: 'var(--danger)',
      marginInlineStart: 4
    }
  }, '*') : null) : null, hint && !error ? React.createElement('span', {
    key: 'h',
    style: {
      font: 'var(--text-small-role)',
      color: 'var(--text-muted)'
    }
  }, hint) : null, children, error ? React.createElement('span', {
    key: 'e',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--text-small-role)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--danger-ink)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'triangle-alert',
    size: 18
  }), error) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  icon,
  error,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const err = !!error;
  const field = React.createElement('input', {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...{
        width: '100%',
        minHeight: 'var(--control-h)',
        padding: '14px 18px',
        background: 'var(--surface-card)',
        color: 'var(--text-body)',
        font: 'var(--text-body-role)',
        border: `2px solid ${err ? 'var(--danger)' : focus ? 'var(--teal-500)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focus ? 'var(--focus-ring)' : 'none',
        outline: 'none',
        transition: 'var(--transition-control)'
      },
      paddingInlineStart: icon ? '52px' : '18px',
      ...style
    },
    ...rest
  });
  if (!icon) return field;
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, React.createElement('span', {
    key: 'i',
    style: {
      position: 'absolute',
      insetInlineStart: '18px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: focus ? 'var(--brand)' : 'var(--text-subtle)'
  })), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      minHeight: 'var(--tap-min)',
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      background: checked ? 'var(--teal-50)' : 'transparent',
      border: `2px solid ${checked ? 'var(--teal-400)' : 'var(--border-default)'}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }, React.createElement('input', {
    key: 'i',
    type: 'radio',
    name,
    value,
    checked: !!checked,
    disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), React.createElement('span', {
    key: 'd',
    style: {
      flex: 'none',
      width: 26,
      height: 26,
      marginTop: 2,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: `2px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
      boxShadow: checked ? 'inset 0 0 0 5px var(--brand)' : 'none',
      transition: 'var(--transition-control)'
    }
  }), React.createElement('span', {
    key: 't',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-body-role)',
      fontWeight: checked ? 'var(--weight-semibold)' : 'var(--weight-regular)',
      color: 'var(--text-strong)'
    }
  }, label), description ? React.createElement('span', {
    style: {
      font: 'var(--text-small-role)',
      color: 'var(--text-muted)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  options = [],
  error,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const err = !!error;
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, React.createElement('select', {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...{
        width: '100%',
        minHeight: 'var(--control-h)',
        padding: '14px 18px',
        background: 'var(--surface-card)',
        color: 'var(--text-body)',
        font: 'var(--text-body-role)',
        border: `2px solid ${err ? 'var(--danger)' : focus ? 'var(--teal-500)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focus ? 'var(--focus-ring)' : 'none',
        outline: 'none',
        transition: 'var(--transition-control)'
      },
      appearance: 'none',
      paddingInlineEnd: '54px',
      cursor: 'pointer',
      ...style
    },
    ...rest
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return React.createElement('option', {
      key: v,
      value: v
    }, l);
  })), React.createElement('span', {
    key: 'c',
    style: {
      position: 'absolute',
      insetInlineEnd: '18px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 22,
    color: 'var(--teal-600)'
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  description,
  checked,
  onChange,
  disabled,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      minHeight: 'var(--tap-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, React.createElement('input', {
    key: 'i',
    type: 'checkbox',
    role: 'switch',
    checked: !!checked,
    disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), React.createElement('span', {
    key: 's',
    style: {
      position: 'relative',
      flex: 'none',
      width: 60,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand)' : 'var(--warm-300)',
      transition: 'background-color var(--duration-base) var(--ease-out)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 4,
      insetInlineStart: checked ? 30 : 4,
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--warm-0)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'inset-inline-start var(--duration-base) var(--ease-out)'
    }
  })), label ? React.createElement('span', {
    key: 't',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-body-role)',
      color: 'var(--text-body)'
    }
  }, label), description ? React.createElement('span', {
    style: {
      font: 'var(--text-small-role)',
      color: 'var(--text-muted)'
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  error,
  rows = 5,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const err = !!error;
  return React.createElement('textarea', {
    rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...{
        width: '100%',
        minHeight: 'var(--control-h)',
        padding: '14px 18px',
        background: 'var(--surface-card)',
        color: 'var(--text-body)',
        font: 'var(--text-body-role)',
        border: `2px solid ${err ? 'var(--danger)' : focus ? 'var(--teal-500)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focus ? 'var(--focus-ring)' : 'none',
        outline: 'none',
        transition: 'var(--transition-control)'
      },
      lineHeight: 'var(--leading-relaxed)',
      resize: 'vertical',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, items.map((it, i) => {
    const on = open === i;
    return React.createElement('div', {
      key: it.q || i,
      style: {
        background: 'var(--surface-card)',
        border: `1px solid ${on ? 'var(--teal-200)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        transition: 'var(--transition-surface)'
      }
    }, React.createElement('button', {
      key: 'b',
      'aria-expanded': on,
      onClick: () => setOpen(on ? -1 : i),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        width: '100%',
        minHeight: 'var(--control-h)',
        padding: 'var(--space-4) var(--space-6)',
        background: on ? 'var(--teal-50)' : 'transparent',
        border: 0,
        cursor: 'pointer',
        textAlign: 'start',
        font: 'var(--text-h5)',
        fontFamily: 'var(--font-display)',
        color: 'var(--text-strong)',
        transition: 'var(--transition-control)'
      }
    }, it.q, React.createElement(__ds_scope.Icon, {
      name: 'chevron-down',
      size: 24,
      color: 'var(--teal-600)',
      style: {
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-out)'
      }
    })), on ? React.createElement('div', {
      key: 'p',
      style: {
        padding: 'var(--space-5) var(--space-6) var(--space-6)',
        font: 'var(--text-body-role)',
        color: 'var(--text-body)',
        maxWidth: 'var(--measure)'
      }
    }, it.a) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Steps.jsx
try { (() => {
function Steps({
  items = [],
  current = 0,
  orientation = 'vertical',
  style
}) {
  const vertical = orientation === 'vertical';
  return React.createElement('ol', {
    style: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',
      gap: vertical ? 'var(--space-2)' : 'var(--space-6)',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, items.map((it, i) => {
    const done = i < current,
      now = i === current;
    const label = typeof it === 'string' ? it : it.label,
      note = typeof it === 'string' ? null : it.note;
    return React.createElement('li', {
      key: label,
      style: {
        display: 'flex',
        gap: 'var(--space-4)',
        flex: vertical ? undefined : 1,
        alignItems: 'flex-start',
        padding: vertical ? 'var(--space-3) 0' : 0
      }
    }, React.createElement('span', {
      key: 'm',
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: done ? 'var(--green-400)' : now ? 'var(--brand)' : 'var(--warm-100)',
        color: done ? 'var(--green-800)' : now ? 'var(--text-inverse)' : 'var(--text-subtle)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--size-body)',
        border: now ? '4px solid var(--teal-100)' : 'none'
      }
    }, done ? React.createElement(__ds_scope.Icon, {
      name: 'check',
      size: 22
    }) : String(i + 1)), React.createElement('span', {
      key: 't',
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        paddingTop: done || now ? 8 : 8
      }
    }, React.createElement('span', {
      style: {
        font: 'var(--text-h5)',
        fontFamily: 'var(--font-display)',
        color: now ? 'var(--text-strong)' : 'var(--text-body)',
        fontWeight: now ? 'var(--weight-semibold)' : 'var(--weight-medium)'
      }
    }, label), note ? React.createElement('span', {
      style: {
        font: 'var(--text-small-role)',
        color: 'var(--text-muted)',
        maxWidth: '46ch'
      }
    }, note) : null));
  }));
}
Object.assign(__ds_scope, { Steps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Steps.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  const active = value || items[0] && items[0].id;
  return React.createElement('div', {
    role: 'tablist',
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      borderBottom: '2px solid var(--border-subtle)',
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return React.createElement('button', {
      key: it.id,
      role: 'tab',
      'aria-selected': on,
      onClick: () => onChange && onChange(it.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        minHeight: 'var(--control-h-sm)',
        padding: '0 var(--space-5)',
        marginBottom: '-2px',
        background: 'transparent',
        border: 0,
        borderBottom: `4px solid ${on ? 'var(--brand)' : 'transparent'}`,
        font: 'var(--text-body-role)',
        fontFamily: 'var(--font-display)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: on ? 'var(--teal-800)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, it.icon ? React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 22
    }) : null, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Shell.jsx
try { (() => {
const {
  Wordmark,
  Icon,
  IconButton,
  Badge,
  Button,
  Switch
} = window.TLVPatientCareDesignSystem_158230;
const SIDE = [{
  id: 'plan',
  label: 'My plan',
  icon: 'list-checks'
}, {
  id: 'appts',
  label: 'Appointments',
  icon: 'calendar-days'
}, {
  id: 'notes',
  label: 'Visit notes',
  icon: 'notebook-pen'
}, {
  id: 'team',
  label: 'My team',
  icon: 'users-round'
}, {
  id: 'help',
  label: 'Get help',
  icon: 'circle-question-mark'
}];
function Sidebar({
  view,
  go
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 288,
      flex: 'none',
      background: 'var(--surface-brand-deep)',
      color: 'var(--teal-100)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-7) var(--space-5)',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    form: "medium",
    align: "stack",
    size: 26,
    color: "var(--warm-0)",
    style: {
      paddingInlineStart: 'var(--space-3)'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, SIDE.map(s => {
    const on = s.id === view;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => go(s.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        minHeight: 56,
        padding: '0 var(--space-4)',
        background: on ? 'rgba(255,255,255,.13)' : 'transparent',
        border: 0,
        borderRadius: 'var(--radius-md)',
        font: 'var(--text-body-role)',
        fontFamily: 'var(--font-display)',
        fontWeight: on ? 600 : 500,
        fontSize: 'var(--size-body-lg)',
        color: on ? 'var(--warm-0)' : 'var(--teal-100)',
        cursor: 'pointer',
        textAlign: 'start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 24,
      color: on ? 'var(--seafoam-300)' : 'var(--teal-200)'
    }), s.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 'var(--space-5)',
      background: 'rgba(255,255,255,.07)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--seafoam-300)'
    }
  }, "Need us now?"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h4)',
      fontFamily: 'var(--font-display)',
      color: 'var(--warm-0)'
    }
  }, "(555) 012-8834"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small-role)',
      color: 'var(--teal-200)'
    }
  }, "Mon\u2013Fri, 8am \u2013 6pm")));
}
function Topbar({
  title,
  subtitle,
  big,
  setBig
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-7) var(--space-9)',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h3)',
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-role)',
      color: 'var(--text-muted)',
      margin: '6px 0 0'
    }
  }, subtitle)), /*#__PURE__*/React.createElement(Switch, {
    label: "Larger text",
    checked: big,
    onChange: setBig
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "printer",
    label: "Print this page",
    variant: "soft"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      paddingInlineStart: 'var(--space-5)',
      borderInlineStart: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'var(--teal-100)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-round",
    size: 26,
    color: "var(--teal-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-body-role)',
      fontWeight: 600
    }
  }, "Jane Alvarez"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small-role)',
      color: 'var(--text-muted)'
    }
  }, "Client since March"))));
}
function Panel({
  title,
  action,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-7)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h4)',
      margin: 0,
      flex: 1
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)'
    }
  }, children));
}
Object.assign(window, {
  Sidebar,
  Topbar,
  Panel,
  SIDE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Views.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Steps,
  Tabs,
  Alert,
  Accordion,
  Field,
  Input,
  Textarea,
  Checkbox,
  Dialog
} = window.TLVPatientCareDesignSystem_158230;
const APPTS = [{
  when: 'Tuesday 12 May · 10:15am',
  who: 'Dr. Okafor — Oncology',
  where: 'Mercy Medical, Suite 340',
  tone: 'brand',
  state: 'Confirmed',
  icon: 'circle-check'
}, {
  when: 'Thursday 21 May · 2:00pm',
  who: 'Bloodwork — no appointment needed',
  where: 'Mercy Medical, Ground floor',
  tone: 'info',
  state: 'Walk-in',
  icon: 'clock'
}, {
  when: 'Monday 2 June · 11:30am',
  who: 'Dr. Reyes — Cardiology',
  where: 'Video visit on MyChart',
  tone: 'warning',
  state: 'Needs a form',
  icon: 'triangle-alert'
}];
function Plan({
  go,
  openDialog
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "reassure",
    title: "Your written plan is ready",
    action: /*#__PURE__*/React.createElement(Button, {
      iconLeft: "download"
    }, "Download large-print copy")
  }, "We updated it after your call on Friday. Nothing here is a decision you have to make today."), /*#__PURE__*/React.createElement(Panel, {
    title: "Where we are",
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, "Step 3 of 4")
  }, /*#__PURE__*/React.createElement(Steps, {
    current: 2,
    items: [{
      label: 'Free 20-minute call',
      note: 'Completed 14 March.'
    }, {
      label: 'We read your records together',
      note: 'Completed 2 April.'
    }, {
      label: 'Questions for Dr. Okafor',
      note: 'Ready for your appointment on 12 May.'
    }, {
      label: 'Written plan review',
      note: 'We will call you the week after.'
    }]
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Your questions for Tuesday",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "plus",
      onClick: openDialog
    }, "Add a question")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, ['What does stage 2 mean for me day to day?', 'If I start treatment in June instead of May, what changes?', 'Which side effects should make me call you?', 'Can my daughter join the next appointment?'].map(q => /*#__PURE__*/React.createElement("label", {
    key: q,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      padding: 'var(--space-4) var(--space-5)',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      font: 'var(--text-body-role)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-question-mark",
    size: 24,
    color: "var(--teal-600)",
    style: {
      marginTop: 2
    }
  }), q))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Next appointment"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    icon: "circle-check"
  }, "Confirmed"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h3)',
      fontFamily: 'var(--font-display)',
      color: 'var(--text-strong)'
    }
  }, "Tuesday 12 May"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-body)'
    }
  }, "10:15am with Dr. Okafor"), [['map-pin', 'Mercy Medical, Suite 340'], ['clock', 'Arrive 15 minutes early'], ['file-text', 'Bring your medication list']].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      font: 'var(--text-body-role)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22,
    color: "var(--teal-600)"
  }), t)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconLeft: "calendar-days",
    onClick: () => go('appts')
  }, "See all appointments"))), /*#__PURE__*/React.createElement(Card, {
    tone: "soft",
    icon: "messages-square",
    title: "Talk it through",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      iconLeft: "phone"
    }, "Request a call back")
  }, "Anything on this page can be explained again, as many times as you need.")));
}
function Appointments() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, APPTS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.when,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-6) var(--space-7)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--teal-50)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-days",
    size: 30,
    color: "var(--brand)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h5)',
      fontFamily: 'var(--font-display)',
      color: 'var(--text-strong)'
    }
  }, a.when), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-role)'
    }
  }, a.who), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small-role)',
      color: 'var(--text-muted)'
    }
  }, a.where)), /*#__PURE__*/React.createElement(Badge, {
    tone: a.tone === 'brand' ? 'success' : a.tone,
    icon: a.icon
  }, a.state), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Details"))), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "One form is still missing",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Open the form")
  }, "Dr. Reyes needs a consent form before the video visit on 2 June. We can fill it in with you on the phone."));
}
function Notes() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, [['2 April', 'Records review', 'We went through the biopsy report and the oncologist’s letter line by line. Plain-language summary attached.'], ['14 March', 'First call', 'You told us about the diagnosis on 9 March and what worried you most: telling your family, and the drive to Mercy.'], ['9 March', 'Diagnosis appointment', 'Notes you brought home, typed up and organised.'], ['Ongoing', 'Medication list', 'Kept up to date after every appointment. Print it before each visit.']].map(([d, t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    eyebrow: d,
    title: t,
    icon: "file-text",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: "chevron-right"
    }, "Read the summary")
  }, b)));
}
function Team() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, [['Dr. Amara Okafor', 'Oncologist', 'Mercy Medical', 'stethoscope'], ['Dr. Luis Reyes', 'Cardiologist', 'Mercy Medical', 'heart'], ['Nurse Pat Whelan', 'Care coordinator', 'Mercy Medical', 'clipboard-list'], ['Sofia Alvarez', 'Daughter — has access', 'Family', 'users-round'], ['TLV Patient Care', 'Your consultant', 'TLV', 'heart-handshake'], ['Mercy Pharmacy', 'Prescriptions', 'Elm Street', 'pill']].map(([n, r, o, i]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    icon: i,
    title: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-role)'
    }
  }, r), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small-role)',
      color: 'var(--text-muted)'
    }
  }, o)))));
}
function Help() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Frequently asked"
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      q: 'How do I log in to MyChart?',
      a: 'Use the email address ending in @gmail.com and the password we wrote on your card. If it does not work, call us and we will reset it together.'
    }, {
      q: 'Can I print my plan in larger type?',
      a: 'Yes. Turn on “Larger text” at the top of the page, then use the print button.'
    }, {
      q: 'Who can see my information here?',
      a: 'Only you, your TLV consultant, and anyone you have named — currently your daughter Sofia.'
    }]
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Send us a message",
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Replies within a day")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "What would you like to ask?"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 5,
    placeholder: "Write it however you would say it."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Call me instead of writing back",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Send to my consultant"))));
}
Object.assign(window, {
  Plan,
  Appointments,
  Notes,
  Team,
  Help
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Views.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Wordmark,
  Icon
} = window.TLVPatientCareDesignSystem_158230;
const NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'services',
  label: 'How we help'
}, {
  id: 'process',
  label: 'What to expect'
}, {
  id: 'about',
  label: 'About TLV'
}];
function Header({
  page,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'rgba(253,251,248,.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--gradient-hope)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--space-7)',
      height: 88,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    form: "medium",
    size: 28
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginInlineStart: 'auto'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      minHeight: 48,
      padding: '0 18px',
      background: page === n.id ? 'var(--teal-50)' : 'transparent',
      border: 0,
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-body-role)',
      fontFamily: 'var(--font-display)',
      fontWeight: page === n.id ? 600 : 500,
      color: page === n.id ? 'var(--teal-800)' : 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, n.label))), /*#__PURE__*/React.createElement("a", {
    href: "tel:5550128834",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      textDecoration: 'none',
      font: 'var(--text-body-role)',
      fontWeight: 600,
      color: 'var(--teal-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20
  }), "(555) 012-8834"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => go('contact')
  }, "Book a free call")));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-brand-deep)',
      color: 'var(--teal-100)',
      padding: 'var(--space-11) var(--space-7) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    form: "long",
    align: "stack",
    size: 30,
    color: "var(--warm-0)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-role)',
      color: 'var(--teal-100)',
      maxWidth: '34ch',
      margin: 0
    }
  }, "Personal help understanding a diagnosis, preparing for appointments and using online patient portals.")), [['Services', ['Understand your diagnosis', 'Prepare for appointments', 'Manage online portals', 'Support for families']], ['Company', ['About TLV', 'What to expect', 'Frequently asked questions', 'Contact']], ['Get in touch', ['(555) 012-8834', 'hello@tlvpatientcare.com', 'Mon–Fri, 8am – 6pm']]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--seafoam-300)'
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: 'var(--text-body-role)',
      color: 'var(--teal-100)',
      textDecoration: 'none'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: 'var(--space-9) auto 0',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid rgba(255,255,255,.14)',
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--text-small-role)',
      color: 'var(--teal-200)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 TLV Patient Care Consultants, LLC"), /*#__PURE__*/React.createElement("span", null, "TLV does not provide medical advice. We help you understand the advice you have already been given.")));
}
function Section({
  children,
  tone = 'page',
  pad = 'var(--section-y)',
  style
}) {
  const bg = {
    page: 'var(--surface-page)',
    card: 'var(--surface-card)',
    soft: 'var(--gradient-calm)',
    deep: 'var(--surface-brand-deep)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: `${pad} var(--space-7)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, children));
}
function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'start'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-9)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'start'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--teal-600)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      margin: 0,
      maxWidth: '20ch'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: '52ch'
    }
  }, lead));
}
function Photo({
  label,
  h = 380,
  tone = 'calm'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 'var(--radius-xl)',
      background: tone === 'calm' ? 'var(--gradient-calm)' : 'var(--gradient-hope)',
      border: '1px solid var(--border-subtle)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small-role)',
      color: tone === 'calm' ? 'var(--teal-700)' : 'var(--teal-900)',
      maxWidth: '30ch'
    }
  }, label));
}
Object.assign(window, {
  Header,
  Footer,
  Section,
  SectionHead,
  Photo,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  Icon,
  Steps,
  Accordion,
  Alert,
  Field,
  Input,
  Textarea,
  Select,
  Radio,
  Checkbox
} = window.TLVPatientCareDesignSystem_158230;
const SERVICES = [{
  icon: 'stethoscope',
  title: 'Understand your diagnosis',
  body: 'We sit with you and put what the doctor said into plain language — what it means, what it does not mean, and what happens next.'
}, {
  icon: 'clipboard-list',
  title: 'Prepare for appointments',
  body: 'We write your questions down with you beforehand, and go over the answers afterwards so nothing gets lost.'
}, {
  icon: 'lock',
  title: 'Manage online portals',
  body: 'MyChart, test results, prescription refills, video visits. We set them up and show you how to use them at your own pace.'
}, {
  icon: 'users-round',
  title: 'Support for families',
  body: 'Adult children and caregivers get the same plain-language summary, so everyone is working from the same page.'
}];
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "soft",
    pad: "var(--space-12)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    icon: "heart-handshake"
  }, "Serving seniors and their families"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display)',
      margin: 0,
      maxWidth: '15ch'
    }
  }, "You heard the diagnosis. Now let\u2019s understand it."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-body)',
      margin: 0,
      maxWidth: '46ch'
    }
  }, "Personal, practical help understanding your diagnosis, your treatment options and your treatment plan \u2014 at a pace that suits you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('contact')
  }, "Book a free 20-minute call"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('process')
  }, "See what to expect")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small-role)',
      color: 'var(--text-muted)'
    }
  }, "No cost, no obligation. Bring a family member if you would like.")), /*#__PURE__*/React.createElement(Photo, {
    h: 460,
    label: "Photograph: a consultant and an older client going through paperwork together at a kitchen table. Warm daylight, natural tones."
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 'var(--space-7)',
      alignItems: 'start',
      maxWidth: '96ch'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 56,
    color: "var(--seafoam-300)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) 30px/1.5 var(--font-body)',
      color: 'var(--text-strong)',
      margin: '0 0 var(--space-5)',
      maxWidth: '42ch'
    }
  }, "Often times when you receive a devastating diagnosis, all the information given to you after the actual diagnosis is lost. The last word you hear is the name of your illness, everything else is lost."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: '46ch'
    }
  }, "I can help you understand your diagnosis, your treatment option and your treatment plan."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--teal-100)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-round",
    size: 28,
    color: "var(--teal-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-h5)'
    }
  }, "Founder"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small-role)',
      color: 'var(--text-muted)'
    }
  }, "TLV Patient Care Consultants")))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How we help",
    title: "Four things we take off your plate",
    lead: "Every engagement starts with a conversation, not a form."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    icon: s.icon,
    title: s.title,
    accent: i === 0,
    interactive: true
  }, s.body)))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--seafoam-300)'
    }
  }, "What to expect"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--warm-0)',
      margin: 'var(--space-4) 0 var(--space-5)',
      maxWidth: '16ch'
    }
  }, "Three steps, at your pace"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--teal-100)',
      maxWidth: '44ch'
    }
  }, "Nothing is rushed and nothing is automated. The same person is with you from the first call."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('contact'),
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Start with a free call")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.06)',
      border: '1px solid rgba(255,255,255,.14)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Steps, {
    current: 3,
    items: [{
      label: 'A free 20-minute call',
      note: 'Tell us what you were told. We listen.'
    }, {
      label: 'We read your records together',
      note: 'In person or on the phone, as slowly as you need.'
    }, {
      label: 'You get a written plan',
      note: 'Plain language, large print, one page.'
    }],
    style: {
      '--x': 0
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Questions people ask",
    title: "Straight answers",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 840,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      q: 'Do you give medical advice?',
      a: 'No. We are not doctors and we do not diagnose or treat. We help you understand the advice your own medical team has already given you, and help you ask better questions next time.'
    }, {
      q: 'Can my daughter or son join the call?',
      a: 'Yes, and most families do. We can also send the written summary to whoever you nominate.'
    }, {
      q: 'I am not comfortable with computers. Is that a problem?',
      a: 'Not at all. That is one of the main reasons people call us. We will set up your portal login and walk you through it as many times as you need.'
    }, {
      q: 'What does it cost?',
      a: 'The first 20-minute call is free. After that we quote a flat fee for the work, agreed with you in advance. No hourly surprises.'
    }]
  }))));
}
function Services({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "soft",
    pad: "var(--space-10)"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How we help",
    title: "Support that meets you where you are",
    lead: "Choose one service or all four. Most clients start with the first."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "All services"), /*#__PURE__*/React.createElement(Tag, null, "For patients"), /*#__PURE__*/React.createElement(Tag, null, "For families"), /*#__PURE__*/React.createElement(Tag, null, "Technology help"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    icon: s.icon,
    title: s.title,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: "arrow-right",
      onClick: () => go('contact')
    }, "Ask about this")
  }, s.body)))), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    pad: "var(--space-10)"
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "reassure",
    title: "You do not have to decide today",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go('contact')
    }, "Book a free call")
  }, "Take this page home, talk it over, and call when you are ready. We will still be here.")));
}
function Process({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "soft",
    pad: "var(--space-10)"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What to expect",
    title: "From the first call to your written plan"
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-11)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Steps, {
    current: 1,
    items: [{
      label: 'A free 20-minute call',
      note: 'You tell us what you were told and what is worrying you most. No paperwork.'
    }, {
      label: 'We read your records together',
      note: 'Test results, letters, discharge notes. We translate each one into plain language.'
    }, {
      label: 'We prepare your questions',
      note: 'You go into the next appointment with a written list, and we go over the answers afterwards.'
    }, {
      label: 'You get a written plan',
      note: 'One page, large print, in your own words. Your family gets a copy if you want them to.'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    h: 280,
    label: "Photograph: a one-page large-print plan on a table beside reading glasses and a cup of tea."
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "soft",
    icon: "shield-check",
    title: "What we never do"
  }, "We do not diagnose, prescribe, or tell you which treatment to choose. We do not speak to your doctors without your written say-so.")))));
}
function About() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "soft",
    pad: "var(--space-10)"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "About TLV",
    title: "One person, on your side, from the first call",
    lead: "TLV Patient Care Consultants was founded to close the gap between what a doctor says and what a patient hears."
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'var(--space-11)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    h: 420,
    label: "Portrait photograph of the founder. Warm, natural light, direct eye contact, plain background."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-body)'
    }
  }, "Navigating a difficult diagnosis can be overwhelming for anyone, but particularly for seniors who may also face challenges with technology and complex online healthcare systems."), /*#__PURE__*/React.createElement("p", null, "This consulting business provides personalized, empathetic and practical support to seniors and their families \u2014 empowering them to understand their diagnosis, access relevant information, manage appointments and utilize online portals effectively."), /*#__PURE__*/React.createElement("p", null, "Our services improve healthcare, reduce stress and enhance the overall well-being of our senior clients."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    icon: "heart-handshake",
    title: "Empathy first"
  }, "Every call starts by asking how you are, not what your case number is."), /*#__PURE__*/React.createElement(Card, {
    tone: "soft",
    icon: "lightbulb",
    title: "Plain language"
  }, "If we use a word you would not use at your kitchen table, we have not done our job."))))));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [method, setMethod] = React.useState('phone');
  return /*#__PURE__*/React.createElement(Section, {
    tone: "soft",
    pad: "var(--space-10)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-11)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Book a free call",
    title: "Tell us what you were told",
    lead: "Twenty minutes, no cost, no obligation. We will call you back the same day where we can."
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "default",
    icon: "phone",
    title: "Rather just call?"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h4)',
      fontFamily: 'var(--font-display)',
      color: 'var(--teal-700)'
    }
  }, "(555) 012-8834"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      color: 'var(--text-muted)'
    }
  }, "Monday to Friday, 8am \u2013 6pm. A person answers."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-8)'
    }
  }, sent ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Thank you \u2014 we have your details"
  }, "Someone will call you on (555) 012-8834 before 6pm today.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    htmlFor: "cn",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cn",
    icon: "user-round",
    placeholder: "Jane Alvarez"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Best phone number",
    htmlFor: "cp",
    hint: "We will call, not text.",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cp",
    icon: "phone",
    placeholder: "(555) 012-8834"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Who is this for?"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Myself', 'My parent', 'My spouse', 'Someone else I care for']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "How would you like us to reach you?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "m",
    value: "phone",
    label: "Phone call",
    description: "Usually the same day.",
    checked: method === 'phone',
    onChange: setMethod
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "m",
    value: "email",
    label: "Email first",
    checked: method === 'email',
    onChange: setMethod
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "What were you told at the appointment?",
    hint: "As much or as little as you like."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "A family member may join the call",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Request my free call")))));
}
Object.assign(window, {
  Home,
  Services,
  Process,
  About,
  Contact,
  SERVICES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ICON_CDN = __ds_scope.ICON_CDN;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Steps = __ds_scope.Steps;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
