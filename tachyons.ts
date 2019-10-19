import { tss, tssFrames, tssFont, join, query } from "ts-mini/tss";
const tssMedia__1 = `screen and (min-width: 30em)`;
const tssMedia__2 = `screen and (min-width: 30em) and (max-width: 60em)`;
const tssMedia__3 = `screen and (min-width: 60em)`;


const tssCommon__0 = {
  box_sizing: `border-box`,
}
const tssCommon__1 = {
  font_family: `Consolas, monaco, monospace`,
}
const tssCommon__2 = {
  border:  `0`,
  padding: `0`,
}
const tssCommon__3 = {
  font_size: `6rem`,
}
const tssCommon__4 = {
  font_size: `5rem`,
}
const tssCommon__5 = {
  font_size: `6rem`,
}
const tssCommon__6 = {
  font_size: `5rem`,
}
const tssCommon__7 = {
  font_size: `6rem`,
}
const tssCommon__8 = {
  font_size: `5rem`,
}
const tssCommon__9 = {
  font_size: `6rem`,
}
const tssCommon__10 = {
  font_size: `5rem`,
}

tss({
  SELECTOR:                 `=html`,
  line_height:              `1.15`,
  _webkit_text_size_adjust: `100%`,
}, {
  SELECTOR: `=body`,
  margin:   `0`,
}, {
  SELECTOR:  `=h1`,
  font_size: `2em`,
  margin:    `.67em 0`,
}, {
  SELECTOR:   `=hr`,
  box_sizing: `content-box`,
  height:     `0`,
  overflow:   `visible`,
}, {
  SELECTOR:    `=pre`,
  font_family: `monospace, monospace`,
  font_size:   `1em`,
}, {
  SELECTOR:         `=a`,
  background_color: `transparent`,
}, {
  SELECTOR:                `=abbr[title]`,
  border_bottom:           `none`,
  text_decoration:         [`underline`,`underline dotted`],
  _webkit_text_decoration: `underline dotted`,
}, {
  SELECTOR:    `=b,strong`,
  font_weight: `bolder`,
}, {
  SELECTOR:    `=code,kbd,samp`,
  font_family: `monospace, monospace`,
  font_size:   `1em`,
}, {
  SELECTOR:  `=small`,
  font_size: `80%`,
}, {
  SELECTOR:       `=sub,sup`,
  font_size:      `75%`,
  line_height:    `0`,
  position:       `relative`,
  vertical_align: `baseline`,
}, {
  SELECTOR: `=sub`,
  bottom:   `-0.25em`,
}, {
  SELECTOR: `=sup`,
  top:      `-0.5em`,
}, {
  SELECTOR:     `=img`,
  border_style: `none`,
}, {
  SELECTOR:    `=button,input,optgroup,select,textarea`,
  font_family: `inherit`,
  font_size:   `100%`,
  line_height: `1.15`,
  margin:      `0`,
}, {
  SELECTOR: `=button,input`,
  overflow: `visible`,
}, {
  SELECTOR:       `=button,select`,
  text_transform: `none`,
}, {
  SELECTOR:           `=button,[type="button"],[type="reset"],[type="submit"]`,
  _webkit_appearance: `button`,
}, {
  SELECTOR:     `=button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner`,
  border_style: `none`,
  padding:      `0`,
}, {
  SELECTOR: `=button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring`,
  outline:  `1px dotted ButtonText`,
}, {
  SELECTOR: `=fieldset`,
  padding:  `.35em .75em .625em`,
}, {
  SELECTOR:    `=legend`,
  box_sizing:  `border-box`,
  color:       `inherit`,
  display:     `table`,
  max_width:   `100%`,
  padding:     `0`,
  white_space: `normal`,
}, {
  SELECTOR:       `=progress`,
  vertical_align: `baseline`,
}, {
  SELECTOR: `=textarea`,
  overflow: `auto`,
}, {
  SELECTOR:   `=[type="checkbox"],[type="radio"]`,
  box_sizing: `border-box`,
  padding:    `0`,
}, {
  SELECTOR: `=[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button`,
  height:   `auto`,
}, {
  SELECTOR:           `=[type="search"]`,
  _webkit_appearance: `textfield`,
  outline_offset:     `-2px`,
}, {
  SELECTOR:           `=[type="search"]::-webkit-search-decoration`,
  _webkit_appearance: `none`,
}, {
  SELECTOR:           `=::-webkit-file-upload-button`,
  _webkit_appearance: `button`,
  font:               `inherit`,
}, {
  SELECTOR: `=details`,
  display:  `block`,
}, {
  SELECTOR: `=summary`,
  display:  `list-item`,
}, {
  SELECTOR: `=template`,
  display:  `none`,
}, {
  SELECTOR: `=[hidden]`,
  display:  `none`,
}, join({  SELECTOR: `=html,body,div,article,aside,section,main,nav,footer,header,form,fieldset,legend,pre,code,a,h1,h2,h3,h4,h5,h6,p,ul,ol,li,dl,dt,dd,blockquote,figcaption,figure,textarea,table,td,th,tr,input[type="email"],input[type="number"],input[type="password"],input[type="tel"],input[type="text"],input[type="url"]`,}, tssCommon__0), {
  SELECTOR:  `=img`,
  max_width: `100%`,
}, join({  SELECTOR: `=code`,}, tssCommon__1));

export const border_box = tss(tssCommon__0);

export const aspect_ratio = tss({
  height:   `0`,
  position: `relative`,
});

export const aspect_ratio__16x9 = tss({
  padding_bottom: `56.25%`,
});

export const aspect_ratio__9x16 = tss({
  padding_bottom: `177.77%`,
});

export const aspect_ratio__4x3 = tss({
  padding_bottom: `75%`,
});

export const aspect_ratio__3x4 = tss({
  padding_bottom: `133.33%`,
});

export const aspect_ratio__6x4 = tss({
  padding_bottom: `66.6%`,
});

export const aspect_ratio__4x6 = tss({
  padding_bottom: `150%`,
});

export const aspect_ratio__8x5 = tss({
  padding_bottom: `62.5%`,
});

export const aspect_ratio__5x8 = tss({
  padding_bottom: `160%`,
});

export const aspect_ratio__7x5 = tss({
  padding_bottom: `71.42%`,
});

export const aspect_ratio__5x7 = tss({
  padding_bottom: `140%`,
});

export const aspect_ratio__1x1 = tss({
  padding_bottom: `100%`,
});

export const aspect_ratio__object = tss({
  position: `absolute`,
  top:      `0`,
  right:    `0`,
  bottom:   `0`,
  left:     `0`,
  width:    `100%`,
  height:   `100%`,
  z_index:  `100`,
});

export const cover = tss({
  background_size: `cover !important`,
});

export const contain = tss({
  background_size: `contain !important`,
});

export const bg_center = tss({
  background_repeat:   `no-repeat`,
  background_position: `center center`,
});

export const bg_top = tss({
  background_repeat:   `no-repeat`,
  background_position: `top center`,
});

export const bg_right = tss({
  background_repeat:   `no-repeat`,
  background_position: `center right`,
});

export const bg_bottom = tss({
  background_repeat:   `no-repeat`,
  background_position: `bottom center`,
});

export const bg_left = tss({
  background_repeat:   `no-repeat`,
  background_position: `center left`,
});

export const outline = tss({
  outline: `1px solid`,
});

export const outline_transparent = tss({
  outline: `1px solid transparent`,
});

export const outline_0 = tss({
  outline: `0`,
});

export const ba = tss({
  border_style: `solid`,
  border_width: `1px`,
});

export const bt = tss({
  border_top_style: `solid`,
  border_top_width: `1px`,
});

export const br = tss({
  border_right_style: `solid`,
  border_right_width: `1px`,
});

export const bb = tss({
  border_bottom_style: `solid`,
  border_bottom_width: `1px`,
});

export const bl = tss({
  border_left_style: `solid`,
  border_left_width: `1px`,
});

export const bn = tss({
  border_style: `none`,
  border_width: `0`,
});

export const b__black = tss({
  border_color: `#000`,
});

export const b__near_black = tss({
  border_color: `#111`,
});

export const b__dark_gray = tss({
  border_color: `#333`,
});

export const b__mid_gray = tss({
  border_color: `#555`,
});

export const b__gray = tss({
  border_color: `#777`,
});

export const b__silver = tss({
  border_color: `#999`,
});

export const b__light_silver = tss({
  border_color: `#aaa`,
});

export const b__moon_gray = tss({
  border_color: `#ccc`,
});

export const b__light_gray = tss({
  border_color: `#eee`,
});

export const b__near_white = tss({
  border_color: `#f4f4f4`,
});

export const b__white = tss({
  border_color: `#fff`,
});

export const b__white_90 = tss({
  border_color: `rgba( 255, 255, 255, .9 )`,
});

export const b__white_80 = tss({
  border_color: `rgba( 255, 255, 255, .8 )`,
});

export const b__white_70 = tss({
  border_color: `rgba( 255, 255, 255, .7 )`,
});

export const b__white_60 = tss({
  border_color: `rgba( 255, 255, 255, .6 )`,
});

export const b__white_50 = tss({
  border_color: `rgba( 255, 255, 255, .5 )`,
});

export const b__white_40 = tss({
  border_color: `rgba( 255, 255, 255, .4 )`,
});

export const b__white_30 = tss({
  border_color: `rgba( 255, 255, 255, .3 )`,
});

export const b__white_20 = tss({
  border_color: `rgba( 255, 255, 255, .2 )`,
});

export const b__white_10 = tss({
  border_color: `rgba( 255, 255, 255, .1 )`,
});

export const b__white_05 = tss({
  border_color: `rgba( 255, 255, 255, .05 )`,
});

export const b__white_025 = tss({
  border_color: `rgba( 255, 255, 255, .025 )`,
});

export const b__white_0125 = tss({
  border_color: `rgba( 255, 255, 255, .0125 )`,
});

export const b__black_90 = tss({
  border_color: `rgba( 0, 0, 0, .9 )`,
});

export const b__black_80 = tss({
  border_color: `rgba( 0, 0, 0, .8 )`,
});

export const b__black_70 = tss({
  border_color: `rgba( 0, 0, 0, .7 )`,
});

export const b__black_60 = tss({
  border_color: `rgba( 0, 0, 0, .6 )`,
});

export const b__black_50 = tss({
  border_color: `rgba( 0, 0, 0, .5 )`,
});

export const b__black_40 = tss({
  border_color: `rgba( 0, 0, 0, .4 )`,
});

export const b__black_30 = tss({
  border_color: `rgba( 0, 0, 0, .3 )`,
});

export const b__black_20 = tss({
  border_color: `rgba( 0, 0, 0, .2 )`,
});

export const b__black_10 = tss({
  border_color: `rgba( 0, 0, 0, .1 )`,
});

export const b__black_05 = tss({
  border_color: `rgba( 0, 0, 0, .05 )`,
});

export const b__black_025 = tss({
  border_color: `rgba( 0, 0, 0, .025 )`,
});

export const b__black_0125 = tss({
  border_color: `rgba( 0, 0, 0, .0125 )`,
});

export const b__dark_red = tss({
  border_color: `#e7040f`,
});

export const b__red = tss({
  border_color: `#ff4136`,
});

export const b__light_red = tss({
  border_color: `#ff725c`,
});

export const b__orange = tss({
  border_color: `#ff6300`,
});

export const b__gold = tss({
  border_color: `#ffb700`,
});

export const b__yellow = tss({
  border_color: `#ffd700`,
});

export const b__light_yellow = tss({
  border_color: `#fbf1a9`,
});

export const b__purple = tss({
  border_color: `#5e2ca5`,
});

export const b__light_purple = tss({
  border_color: `#a463f2`,
});

export const b__dark_pink = tss({
  border_color: `#d5008f`,
});

export const b__hot_pink = tss({
  border_color: `#ff41b4`,
});

export const b__pink = tss({
  border_color: `#ff80cc`,
});

export const b__light_pink = tss({
  border_color: `#ffa3d7`,
});

export const b__dark_green = tss({
  border_color: `#137752`,
});

export const b__green = tss({
  border_color: `#19a974`,
});

export const b__light_green = tss({
  border_color: `#9eebcf`,
});

export const b__navy = tss({
  border_color: `#001b44`,
});

export const b__dark_blue = tss({
  border_color: `#00449e`,
});

export const b__blue = tss({
  border_color: `#357edd`,
});

export const b__light_blue = tss({
  border_color: `#96ccff`,
});

export const b__lightest_blue = tss({
  border_color: `#cdecff`,
});

export const b__washed_blue = tss({
  border_color: `#f6fffe`,
});

export const b__washed_green = tss({
  border_color: `#e8fdf5`,
});

export const b__washed_yellow = tss({
  border_color: `#fffceb`,
});

export const b__washed_red = tss({
  border_color: `#ffdfdf`,
});

export const b__transparent = tss({
  border_color: `transparent`,
});

export const b__inherit = tss({
  border_color: `inherit`,
});

export const br0 = tss({
  border_radius: `0`,
});

export const br1 = tss({
  border_radius: `.125rem`,
});

export const br2 = tss({
  border_radius: `.25rem`,
});

export const br3 = tss({
  border_radius: `.5rem`,
});

export const br4 = tss({
  border_radius: `1rem`,
});

export const br_100 = tss({
  border_radius: `100%`,
});

export const br_pill = tss({
  border_radius: `9999px`,
});

export const br__bottom = tss({
  border_top_left_radius:  `0`,
  border_top_right_radius: `0`,
});

export const br__top = tss({
  border_bottom_left_radius: `0`,
  border_bottom_right_radius: `0`,
});

export const br__right = tss({
  border_top_left_radius:   `0`,
  border_bottom_left_radius: `0`,
});

export const br__left = tss({
  border_top_right_radius:  `0`,
  border_bottom_right_radius: `0`,
});

export const b__dotted = tss({
  border_style: `dotted`,
});

export const b__dashed = tss({
  border_style: `dashed`,
});

export const b__solid = tss({
  border_style: `solid`,
});

export const b__none = tss({
  border_style: `none`,
});

export const bw0 = tss({
  border_width: `0`,
});

export const bw1 = tss({
  border_width: `.125rem`,
});

export const bw2 = tss({
  border_width: `.25rem`,
});

export const bw3 = tss({
  border_width: `.5rem`,
});

export const bw4 = tss({
  border_width: `1rem`,
});

export const bw5 = tss({
  border_width: `2rem`,
});

export const bt_0 = tss({
  border_top_width: `0`,
});

export const br_0 = tss({
  border_right_width: `0`,
});

export const bb_0 = tss({
  border_bottom_width: `0`,
});

export const bl_0 = tss({
  border_left_width: `0`,
});

export const shadow_1 = tss({
  box_shadow: `0 0 4px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_2 = tss({
  box_shadow: `0 0 8px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_3 = tss({
  box_shadow: `2px 2px 4px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_4 = tss({
  box_shadow: `2px 2px 8px 0 rgba( 0, 0, 0, .2 )`,
});

export const shadow_5 = tss({
  box_shadow: `4px 4px 8px 0 rgba( 0, 0, 0, .2 )`,
});

export const pre = tss({
  overflow_x: `auto`,
  overflow_y: `hidden`,
  overflow:   `scroll`,
}, {
  white_space: `pre`,
});

export const top_0 = tss({
  top: `0`,
});

export const right_0 = tss({
  right: `0`,
});

export const bottom_0 = tss({
  bottom: `0`,
});

export const left_0 = tss({
  left: `0`,
});

export const top_1 = tss({
  top: `1rem`,
});

export const right_1 = tss({
  right: `1rem`,
});

export const bottom_1 = tss({
  bottom: `1rem`,
});

export const left_1 = tss({
  left: `1rem`,
});

export const top_2 = tss({
  top: `2rem`,
});

export const right_2 = tss({
  right: `2rem`,
});

export const bottom_2 = tss({
  bottom: `2rem`,
});

export const left_2 = tss({
  left: `2rem`,
});

export const top__1 = tss({
  top: `-1rem`,
});

export const right__1 = tss({
  right: `-1rem`,
});

export const bottom__1 = tss({
  bottom: `-1rem`,
});

export const left__1 = tss({
  left: `-1rem`,
});

export const top__2 = tss({
  top: `-2rem`,
});

export const right__2 = tss({
  right: `-2rem`,
});

export const bottom__2 = tss({
  bottom: `-2rem`,
});

export const left__2 = tss({
  left: `-2rem`,
});

export const absolute__fill = tss({
  top:    `0`,
  right:  `0`,
  bottom: `0`,
  left:   `0`,
});

export const cf = tss({
  SELECTOR: [`=@:before`, `=@:after`],
  content:  `" "`,
  display:  `table`,
}, {
  SELECTOR: `=@:after`,
  clear:    `both`,
}, {
  zoom: `1`,
});

export const cl = tss({
  clear: `left`,
});

export const cr = tss({
  clear: `right`,
});

export const cb = tss({
  clear: `both`,
});

export const cn = tss({
  clear: `none`,
});

export const dn = tss({
  display: `none`,
});

export const di = tss({
  display: `inline`,
});

export const db = tss({
  display: `block`,
});

export const dib = tss({
  display: `inline-block`,
});

export const dit = tss({
  display: `inline-table`,
});

export const dt = tss({
  display: `table`,
});

export const dtc = tss({
  display: `table-cell`,
});

export const dt_row = tss({
  display: `table-row`,
});

export const dt_row_group = tss({
  display: `table-row-group`,
});

export const dt_column = tss({
  display: `table-column`,
});

export const dt_column_group = tss({
  display: `table-column-group`,
});

export const dt__fixed = tss({
  table_layout: `fixed`,
  width:        `100%`,
});

export const flex = tss({
  display: `flex`,
});

export const inline_flex = tss({
  display: `inline-flex`,
});

export const flex_auto = tss({
  flex:       `1 1 auto`,
  min_width:  `0`,
  min_height: `0`,
});

export const flex_none = tss({
  flex: `none`,
});

export const flex_column = tss({
  flex_direction: `column`,
});

export const flex_row = tss({
  flex_direction: `row`,
});

export const flex_wrap = tss({
  flex_wrap: `wrap`,
});

export const flex_nowrap = tss({
  flex_wrap: `nowrap`,
});

export const flex_wrap_reverse = tss({
  flex_wrap: `wrap-reverse`,
});

export const flex_column_reverse = tss({
  flex_direction: `column-reverse`,
});

export const flex_row_reverse = tss({
  flex_direction: `row-reverse`,
});

export const items_start = tss({
  align_items: `flex-start`,
});

export const items_end = tss({
  align_items: `flex-end`,
});

export const items_center = tss({
  align_items: `center`,
});

export const items_baseline = tss({
  align_items: `baseline`,
});

export const items_stretch = tss({
  align_items: `stretch`,
});

export const self_start = tss({
  align_self: `flex-start`,
});

export const self_end = tss({
  align_self: `flex-end`,
});

export const self_center = tss({
  align_self: `center`,
});

export const self_baseline = tss({
  align_self: `baseline`,
});

export const self_stretch = tss({
  align_self: `stretch`,
});

export const justify_start = tss({
  justify_content: `flex-start`,
});

export const justify_end = tss({
  justify_content: `flex-end`,
});

export const justify_center = tss({
  justify_content: `center`,
});

export const justify_between = tss({
  justify_content: `space-between`,
});

export const justify_around = tss({
  justify_content: `space-around`,
});

export const content_start = tss({
  align_content: `flex-start`,
});

export const content_end = tss({
  align_content: `flex-end`,
});

export const content_center = tss({
  align_content: `center`,
});

export const content_between = tss({
  align_content: `space-between`,
});

export const content_around = tss({
  align_content: `space-around`,
});

export const content_stretch = tss({
  align_content: `stretch`,
});

export const order_0 = tss({
  order: `0`,
});

export const order_1 = tss({
  order: `1`,
});

export const order_2 = tss({
  order: `2`,
});

export const order_3 = tss({
  order: `3`,
});

export const order_4 = tss({
  order: `4`,
});

export const order_5 = tss({
  order: `5`,
});

export const order_6 = tss({
  order: `6`,
});

export const order_7 = tss({
  order: `7`,
});

export const order_8 = tss({
  order: `8`,
});

export const order_last = tss({
  order: `99999`,
});

export const flex_grow_0 = tss({
  flex_grow: `0`,
});

export const flex_grow_1 = tss({
  flex_grow: `1`,
});

export const flex_shrink_0 = tss({
  flex_shrink: `0`,
});

export const flex_shrink_1 = tss({
  flex_shrink: `1`,
});

export const fl = tss({
  float:    `left`,
  _display: `inline`,
});

export const fr = tss({
  float:    `right`,
  _display: `inline`,
});

export const fn = tss({
  float: `none`,
});

export const sans_serif = tss({
  font_family: `-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif`,
});

export const serif = tss({
  font_family: `georgia, times, serif`,
});

export const system_sans_serif = tss({
  font_family: `sans-serif`,
});

export const system_serif = tss({
  font_family: `serif`,
});

export const code = tss(tssCommon__1);

export const courier = tss({
  font_family: `'Courier Next', courier, monospace`,
});

export const helvetica = tss({
  font_family: `'helvetica neue', helvetica, sans-serif`,
});

export const avenir = tss({
  font_family: `'avenir next', avenir, sans-serif`,
});

export const athelas = tss({
  font_family: `athelas, georgia, serif`,
});

export const georgia = tss({
  font_family: `georgia, serif`,
});

export const times = tss({
  font_family: `times, serif`,
});

export const bodoni = tss({
  font_family: `"Bodoni MT", serif`,
});

export const calisto = tss({
  font_family: `"Calisto MT", serif`,
});

export const garamond = tss({
  font_family: `garamond, serif`,
});

export const baskerville = tss({
  font_family: `baskerville, serif`,
});

export const i = tss({
  font_style: `italic`,
});

export const fs_normal = tss({
  font_style: `normal`,
});

export const normal = tss({
  font_weight: `normal`,
});

export const b = tss({
  font_weight: `bold`,
});

export const fw1 = tss({
  font_weight: `100`,
});

export const fw2 = tss({
  font_weight: `200`,
});

export const fw3 = tss({
  font_weight: `300`,
});

export const fw4 = tss({
  font_weight: `400`,
});

export const fw5 = tss({
  font_weight: `500`,
});

export const fw6 = tss({
  font_weight: `600`,
});

export const fw7 = tss({
  font_weight: `700`,
});

export const fw8 = tss({
  font_weight: `800`,
});

export const fw9 = tss({
  font_weight: `900`,
});

export const input_reset = tss({
  _webkit_appearance: `none`,
  _moz_appearance:    `none`,
}, join({  SELECTOR: `=@::-moz-focus-inner`,}, tssCommon__2));

export const button_reset = tss(join({  SELECTOR: `=@::-moz-focus-inner`,}, tssCommon__2));

export const h1 = tss({
  height: `1rem`,
});

export const h2 = tss({
  height: `2rem`,
});

export const h3 = tss({
  height: `4rem`,
});

export const h4 = tss({
  height: `8rem`,
});

export const h5 = tss({
  height: `16rem`,
});

export const h_25 = tss({
  height: `25%`,
});

export const h_50 = tss({
  height: `50%`,
});

export const h_75 = tss({
  height: `75%`,
});

export const h_100 = tss({
  height: `100%`,
});

export const min_h_100 = tss({
  min_height: `100%`,
});

export const vh_25 = tss({
  height: `25vh`,
});

export const vh_50 = tss({
  height: `50vh`,
});

export const vh_75 = tss({
  height: `75vh`,
});

export const vh_100 = tss({
  height: `100vh`,
});

export const min_vh_100 = tss({
  min_height: `100vh`,
});

export const h_auto = tss({
  height: `auto`,
});

export const h_inherit = tss({
  height: `inherit`,
});

export const tracked = tss({
  letter_spacing: `.1em`,
});

export const tracked_tight = tss({
  letter_spacing: `-.05em`,
});

export const tracked_mega = tss({
  letter_spacing: `.25em`,
});

export const lh_solid = tss({
  line_height: `1`,
});

export const lh_title = tss({
  line_height: `1.25`,
});

export const lh_copy = tss({
  line_height: `1.5`,
});

export const link = tss({
  text_decoration: `none`,
  transition:      `color .15s ease-in`,
}, {
  SELECTOR:   [`=@:link`, `=@:visited`],
  transition: `color .15s ease-in`,
}, {
  SELECTOR:   `=@:hover`,
  transition: `color .15s ease-in`,
}, {
  SELECTOR:   `=@:active`,
  transition: `color .15s ease-in`,
}, {
  SELECTOR:   `=@:focus`,
  transition: `color .15s ease-in`,
  outline:    `1px dotted currentColor`,
});

export const list = tss({
  list_style_type: `none`,
});

export const mw_100 = tss({
  max_width: `100%`,
});

export const mw1 = tss({
  max_width: `1rem`,
});

export const mw2 = tss({
  max_width: `2rem`,
});

export const mw3 = tss({
  max_width: `4rem`,
});

export const mw4 = tss({
  max_width: `8rem`,
});

export const mw5 = tss({
  max_width: `16rem`,
});

export const mw6 = tss({
  max_width: `32rem`,
});

export const mw7 = tss({
  max_width: `48rem`,
});

export const mw8 = tss({
  max_width: `64rem`,
});

export const mw9 = tss({
  max_width: `96rem`,
});

export const mw_none = tss({
  max_width: `none`,
});

export const w1 = tss({
  width: `1rem`,
});

export const w2 = tss({
  width: `2rem`,
});

export const w3 = tss({
  width: `4rem`,
});

export const w4 = tss({
  width: `8rem`,
});

export const w5 = tss({
  width: `16rem`,
});

export const w_10 = tss({
  width: `10%`,
});

export const w_20 = tss({
  width: `20%`,
});

export const w_25 = tss({
  width: `25%`,
});

export const w_30 = tss({
  width: `30%`,
});

export const w_33 = tss({
  width: `33%`,
});

export const w_34 = tss({
  width: `34%`,
});

export const w_40 = tss({
  width: `40%`,
});

export const w_50 = tss({
  width: `50%`,
});

export const w_60 = tss({
  width: `60%`,
});

export const w_70 = tss({
  width: `70%`,
});

export const w_75 = tss({
  width: `75%`,
});

export const w_80 = tss({
  width: `80%`,
});

export const w_90 = tss({
  width: `90%`,
});

export const w_100 = tss({
  width: `100%`,
});

export const w_third = tss({
  width: `33.33333%`,
});

export const w_two_thirds = tss({
  width: `66.66667%`,
});

export const w_auto = tss({
  width: `auto`,
});

export const overflow_visible = tss({
  overflow: `visible`,
});

export const overflow_hidden = tss({
  overflow: `hidden`,
});

export const overflow_scroll = tss({
  overflow: `scroll`,
});

export const overflow_auto = tss({
  overflow: `auto`,
});

export const overflow_x_visible = tss({
  overflow_x: `visible`,
});

export const overflow_x_hidden = tss({
  overflow_x: `hidden`,
});

export const overflow_x_scroll = tss({
  overflow_x: `scroll`,
});

export const overflow_x_auto = tss({
  overflow_x: `auto`,
});

export const overflow_y_visible = tss({
  overflow_y: `visible`,
});

export const overflow_y_hidden = tss({
  overflow_y: `hidden`,
});

export const overflow_y_scroll = tss({
  overflow_y: `scroll`,
});

export const overflow_y_auto = tss({
  overflow_y: `auto`,
});

export const staticpos = tss({
  position: `static`,
});

export const relative = tss({
  position: `relative`,
});

export const absolute = tss({
  position: `absolute`,
});

export const fixed = tss({
  position: `fixed`,
});

export const o_100 = tss({
  opacity: `1`,
});

export const o_90 = tss({
  opacity: `.9`,
});

export const o_80 = tss({
  opacity: `.8`,
});

export const o_70 = tss({
  opacity: `.7`,
});

export const o_60 = tss({
  opacity: `.6`,
});

export const o_50 = tss({
  opacity: `.5`,
});

export const o_40 = tss({
  opacity: `.4`,
});

export const o_30 = tss({
  opacity: `.3`,
});

export const o_20 = tss({
  opacity: `.2`,
});

export const o_10 = tss({
  opacity: `.1`,
});

export const o_05 = tss({
  opacity: `.05`,
});

export const o_025 = tss({
  opacity: `.025`,
});

export const o_0 = tss({
  opacity: `0`,
});

export const rotate_45 = tss({
  _webkit_transform: `rotate( 45deg )`,
  transform:         `rotate( 45deg )`,
});

export const rotate_90 = tss({
  _webkit_transform: `rotate( 90deg )`,
  transform:         `rotate( 90deg )`,
});

export const rotate_135 = tss({
  _webkit_transform: `rotate( 135deg )`,
  transform:         `rotate( 135deg )`,
});

export const rotate_180 = tss({
  _webkit_transform: `rotate( 180deg )`,
  transform:         `rotate( 180deg )`,
});

export const rotate_225 = tss({
  _webkit_transform: `rotate( 225deg )`,
  transform:         `rotate( 225deg )`,
});

export const rotate_270 = tss({
  _webkit_transform: `rotate( 270deg )`,
  transform:         `rotate( 270deg )`,
});

export const rotate_315 = tss({
  _webkit_transform: `rotate( 315deg )`,
  transform:         `rotate( 315deg )`,
});

export const black_90 = tss({
  color: `rgba( 0, 0, 0, .9 )`,
});

export const black_80 = tss({
  color: `rgba( 0, 0, 0, .8 )`,
});

export const black_70 = tss({
  color: `rgba( 0, 0, 0, .7 )`,
});

export const black_60 = tss({
  color: `rgba( 0, 0, 0, .6 )`,
});

export const black_50 = tss({
  color: `rgba( 0, 0, 0, .5 )`,
});

export const black_40 = tss({
  color: `rgba( 0, 0, 0, .4 )`,
});

export const black_30 = tss({
  color: `rgba( 0, 0, 0, .3 )`,
});

export const black_20 = tss({
  color: `rgba( 0, 0, 0, .2 )`,
});

export const black_10 = tss({
  color: `rgba( 0, 0, 0, .1 )`,
});

export const black_05 = tss({
  color: `rgba( 0, 0, 0, .05 )`,
});

export const white_90 = tss({
  color: `rgba( 255, 255, 255, .9 )`,
});

export const white_80 = tss({
  color: `rgba( 255, 255, 255, .8 )`,
});

export const white_70 = tss({
  color: `rgba( 255, 255, 255, .7 )`,
});

export const white_60 = tss({
  color: `rgba( 255, 255, 255, .6 )`,
});

export const white_50 = tss({
  color: `rgba( 255, 255, 255, .5 )`,
});

export const white_40 = tss({
  color: `rgba( 255, 255, 255, .4 )`,
});

export const white_30 = tss({
  color: `rgba( 255, 255, 255, .3 )`,
});

export const white_20 = tss({
  color: `rgba( 255, 255, 255, .2 )`,
});

export const white_10 = tss({
  color: `rgba( 255, 255, 255, .1 )`,
});

export const black = tss({
  color: `#000`,
});

export const near_black = tss({
  color: `#111`,
});

export const dark_gray = tss({
  color: `#333`,
});

export const mid_gray = tss({
  color: `#555`,
});

export const gray = tss({
  color: `#777`,
});

export const silver = tss({
  color: `#999`,
});

export const light_silver = tss({
  color: `#aaa`,
});

export const moon_gray = tss({
  color: `#ccc`,
});

export const light_gray = tss({
  color: `#eee`,
});

export const near_white = tss({
  color: `#f4f4f4`,
});

export const white = tss({
  color: `#fff`,
});

export const dark_red = tss({
  color: `#e7040f`,
});

export const red = tss({
  color: `#ff4136`,
});

export const light_red = tss({
  color: `#ff725c`,
});

export const orange = tss({
  color: `#ff6300`,
});

export const gold = tss({
  color: `#ffb700`,
});

export const yellow = tss({
  color: `#ffd700`,
});

export const light_yellow = tss({
  color: `#fbf1a9`,
});

export const purple = tss({
  color: `#5e2ca5`,
});

export const light_purple = tss({
  color: `#a463f2`,
});

export const dark_pink = tss({
  color: `#d5008f`,
});

export const hot_pink = tss({
  color: `#ff41b4`,
});

export const pink = tss({
  color: `#ff80cc`,
});

export const light_pink = tss({
  color: `#ffa3d7`,
});

export const dark_green = tss({
  color: `#137752`,
});

export const green = tss({
  color: `#19a974`,
});

export const light_green = tss({
  color: `#9eebcf`,
});

export const navy = tss({
  color: `#001b44`,
});

export const dark_blue = tss({
  color: `#00449e`,
});

export const blue = tss({
  color: `#357edd`,
});

export const light_blue = tss({
  color: `#96ccff`,
});

export const lightest_blue = tss({
  color: `#cdecff`,
});

export const washed_blue = tss({
  color: `#f6fffe`,
});

export const washed_green = tss({
  color: `#e8fdf5`,
});

export const washed_yellow = tss({
  color: `#fffceb`,
});

export const washed_red = tss({
  color: `#ffdfdf`,
});

export const color_inherit = tss({
  color: `inherit`,
});

export const bg_black_90 = tss({
  background_color: `rgba( 0, 0, 0, .9 )`,
});

export const bg_black_80 = tss({
  background_color: `rgba( 0, 0, 0, .8 )`,
});

export const bg_black_70 = tss({
  background_color: `rgba( 0, 0, 0, .7 )`,
});

export const bg_black_60 = tss({
  background_color: `rgba( 0, 0, 0, .6 )`,
});

export const bg_black_50 = tss({
  background_color: `rgba( 0, 0, 0, .5 )`,
});

export const bg_black_40 = tss({
  background_color: `rgba( 0, 0, 0, .4 )`,
});

export const bg_black_30 = tss({
  background_color: `rgba( 0, 0, 0, .3 )`,
});

export const bg_black_20 = tss({
  background_color: `rgba( 0, 0, 0, .2 )`,
});

export const bg_black_10 = tss({
  background_color: `rgba( 0, 0, 0, .1 )`,
});

export const bg_black_05 = tss({
  background_color: `rgba( 0, 0, 0, .05 )`,
});

export const bg_white_90 = tss({
  background_color: `rgba( 255, 255, 255, .9 )`,
});

export const bg_white_80 = tss({
  background_color: `rgba( 255, 255, 255, .8 )`,
});

export const bg_white_70 = tss({
  background_color: `rgba( 255, 255, 255, .7 )`,
});

export const bg_white_60 = tss({
  background_color: `rgba( 255, 255, 255, .6 )`,
});

export const bg_white_50 = tss({
  background_color: `rgba( 255, 255, 255, .5 )`,
});

export const bg_white_40 = tss({
  background_color: `rgba( 255, 255, 255, .4 )`,
});

export const bg_white_30 = tss({
  background_color: `rgba( 255, 255, 255, .3 )`,
});

export const bg_white_20 = tss({
  background_color: `rgba( 255, 255, 255, .2 )`,
});

export const bg_white_10 = tss({
  background_color: `rgba( 255, 255, 255, .1 )`,
});

export const bg_black = tss({
  background_color: `#000`,
});

export const bg_near_black = tss({
  background_color: `#111`,
});

export const bg_dark_gray = tss({
  background_color: `#333`,
});

export const bg_mid_gray = tss({
  background_color: `#555`,
});

export const bg_gray = tss({
  background_color: `#777`,
});

export const bg_silver = tss({
  background_color: `#999`,
});

export const bg_light_silver = tss({
  background_color: `#aaa`,
});

export const bg_moon_gray = tss({
  background_color: `#ccc`,
});

export const bg_light_gray = tss({
  background_color: `#eee`,
});

export const bg_near_white = tss({
  background_color: `#f4f4f4`,
});

export const bg_white = tss({
  background_color: `#fff`,
});

export const bg_transparent = tss({
  background_color: `transparent`,
});

export const bg_dark_red = tss({
  background_color: `#e7040f`,
});

export const bg_red = tss({
  background_color: `#ff4136`,
});

export const bg_light_red = tss({
  background_color: `#ff725c`,
});

export const bg_orange = tss({
  background_color: `#ff6300`,
});

export const bg_gold = tss({
  background_color: `#ffb700`,
});

export const bg_yellow = tss({
  background_color: `#ffd700`,
});

export const bg_light_yellow = tss({
  background_color: `#fbf1a9`,
});

export const bg_purple = tss({
  background_color: `#5e2ca5`,
});

export const bg_light_purple = tss({
  background_color: `#a463f2`,
});

export const bg_dark_pink = tss({
  background_color: `#d5008f`,
});

export const bg_hot_pink = tss({
  background_color: `#ff41b4`,
});

export const bg_pink = tss({
  background_color: `#ff80cc`,
});

export const bg_light_pink = tss({
  background_color: `#ffa3d7`,
});

export const bg_dark_green = tss({
  background_color: `#137752`,
});

export const bg_green = tss({
  background_color: `#19a974`,
});

export const bg_light_green = tss({
  background_color: `#9eebcf`,
});

export const bg_navy = tss({
  background_color: `#001b44`,
});

export const bg_dark_blue = tss({
  background_color: `#00449e`,
});

export const bg_blue = tss({
  background_color: `#357edd`,
});

export const bg_light_blue = tss({
  background_color: `#96ccff`,
});

export const bg_lightest_blue = tss({
  background_color: `#cdecff`,
});

export const bg_washed_blue = tss({
  background_color: `#f6fffe`,
});

export const bg_washed_green = tss({
  background_color: `#e8fdf5`,
});

export const bg_washed_yellow = tss({
  background_color: `#fffceb`,
});

export const bg_washed_red = tss({
  background_color: `#ffdfdf`,
});

export const bg_inherit = tss({
  background_color: `inherit`,
});

export const hover_black = tss({
  SELECTOR: `=@:hover`,
  color:    `#000`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#000`,
});

export const hover_near_black = tss({
  SELECTOR: `=@:hover`,
  color:    `#111`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#111`,
});

export const hover_dark_gray = tss({
  SELECTOR: `=@:hover`,
  color:    `#333`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#333`,
});

export const hover_mid_gray = tss({
  SELECTOR: `=@:hover`,
  color:    `#555`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#555`,
});

export const hover_gray = tss({
  SELECTOR: `=@:hover`,
  color:    `#777`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#777`,
});

export const hover_silver = tss({
  SELECTOR: `=@:hover`,
  color:    `#999`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#999`,
});

export const hover_light_silver = tss({
  SELECTOR: `=@:hover`,
  color:    `#aaa`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#aaa`,
});

export const hover_moon_gray = tss({
  SELECTOR: `=@:hover`,
  color:    `#ccc`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#ccc`,
});

export const hover_light_gray = tss({
  SELECTOR: `=@:hover`,
  color:    `#eee`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#eee`,
});

export const hover_near_white = tss({
  SELECTOR: `=@:hover`,
  color:    `#f4f4f4`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#f4f4f4`,
});

export const hover_white = tss({
  SELECTOR: `=@:hover`,
  color:    `#fff`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#fff`,
});

export const hover_black_90 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 0, 0, 0, .9 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 0, 0, 0, .9 )`,
});

export const hover_black_80 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 0, 0, 0, .8 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 0, 0, 0, .8 )`,
});

export const hover_black_70 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 0, 0, 0, .7 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 0, 0, 0, .7 )`,
});

export const hover_black_60 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 0, 0, 0, .6 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 0, 0, 0, .6 )`,
});

export const hover_black_50 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 0, 0, 0, .5 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 0, 0, 0, .5 )`,
});

export const hover_black_40 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 0, 0, 0, .4 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 0, 0, 0, .4 )`,
});

export const hover_black_30 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 0, 0, 0, .3 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 0, 0, 0, .3 )`,
});

export const hover_black_20 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 0, 0, 0, .2 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 0, 0, 0, .2 )`,
});

export const hover_black_10 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 0, 0, 0, .1 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 0, 0, 0, .1 )`,
});

export const hover_white_90 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 255, 255, 255, .9 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 255, 255, 255, .9 )`,
});

export const hover_white_80 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 255, 255, 255, .8 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 255, 255, 255, .8 )`,
});

export const hover_white_70 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 255, 255, 255, .7 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 255, 255, 255, .7 )`,
});

export const hover_white_60 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 255, 255, 255, .6 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 255, 255, 255, .6 )`,
});

export const hover_white_50 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 255, 255, 255, .5 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 255, 255, 255, .5 )`,
});

export const hover_white_40 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 255, 255, 255, .4 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 255, 255, 255, .4 )`,
});

export const hover_white_30 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 255, 255, 255, .3 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 255, 255, 255, .3 )`,
});

export const hover_white_20 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 255, 255, 255, .2 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 255, 255, 255, .2 )`,
});

export const hover_white_10 = tss({
  SELECTOR: `=@:hover`,
  color:    `rgba( 255, 255, 255, .1 )`,
}, {
  SELECTOR: `=@:focus`,
  color:    `rgba( 255, 255, 255, .1 )`,
});

export const hover_inherit = tss({
  SELECTOR: [`=@:hover`, `=@:focus`],
  color:    `inherit`,
});

export const hover_bg_black = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#000`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#000`,
});

export const hover_bg_near_black = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#111`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#111`,
});

export const hover_bg_dark_gray = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#333`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#333`,
});

export const hover_bg_mid_gray = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#555`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#555`,
});

export const hover_bg_gray = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#777`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#777`,
});

export const hover_bg_silver = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#999`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#999`,
});

export const hover_bg_light_silver = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#aaa`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#aaa`,
});

export const hover_bg_moon_gray = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#ccc`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#ccc`,
});

export const hover_bg_light_gray = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#eee`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#eee`,
});

export const hover_bg_near_white = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#f4f4f4`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#f4f4f4`,
});

export const hover_bg_white = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#fff`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#fff`,
});

export const hover_bg_transparent = tss({
  SELECTOR:         `=@:hover`,
  background_color: `transparent`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `transparent`,
});

export const hover_bg_black_90 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 0, 0, 0, .9 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 0, 0, 0, .9 )`,
});

export const hover_bg_black_80 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 0, 0, 0, .8 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 0, 0, 0, .8 )`,
});

export const hover_bg_black_70 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 0, 0, 0, .7 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 0, 0, 0, .7 )`,
});

export const hover_bg_black_60 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 0, 0, 0, .6 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 0, 0, 0, .6 )`,
});

export const hover_bg_black_50 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 0, 0, 0, .5 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 0, 0, 0, .5 )`,
});

export const hover_bg_black_40 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 0, 0, 0, .4 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 0, 0, 0, .4 )`,
});

export const hover_bg_black_30 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 0, 0, 0, .3 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 0, 0, 0, .3 )`,
});

export const hover_bg_black_20 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 0, 0, 0, .2 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 0, 0, 0, .2 )`,
});

export const hover_bg_black_10 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 0, 0, 0, .1 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 0, 0, 0, .1 )`,
});

export const hover_bg_white_90 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 255, 255, 255, .9 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 255, 255, 255, .9 )`,
});

export const hover_bg_white_80 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 255, 255, 255, .8 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 255, 255, 255, .8 )`,
});

export const hover_bg_white_70 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 255, 255, 255, .7 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 255, 255, 255, .7 )`,
});

export const hover_bg_white_60 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 255, 255, 255, .6 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 255, 255, 255, .6 )`,
});

export const hover_bg_white_50 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 255, 255, 255, .5 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 255, 255, 255, .5 )`,
});

export const hover_bg_white_40 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 255, 255, 255, .4 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 255, 255, 255, .4 )`,
});

export const hover_bg_white_30 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 255, 255, 255, .3 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 255, 255, 255, .3 )`,
});

export const hover_bg_white_20 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 255, 255, 255, .2 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 255, 255, 255, .2 )`,
});

export const hover_bg_white_10 = tss({
  SELECTOR:         `=@:hover`,
  background_color: `rgba( 255, 255, 255, .1 )`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `rgba( 255, 255, 255, .1 )`,
});

export const hover_dark_red = tss({
  SELECTOR: `=@:hover`,
  color:    `#e7040f`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#e7040f`,
});

export const hover_red = tss({
  SELECTOR: `=@:hover`,
  color:    `#ff4136`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#ff4136`,
});

export const hover_light_red = tss({
  SELECTOR: `=@:hover`,
  color:    `#ff725c`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#ff725c`,
});

export const hover_orange = tss({
  SELECTOR: `=@:hover`,
  color:    `#ff6300`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#ff6300`,
});

export const hover_gold = tss({
  SELECTOR: `=@:hover`,
  color:    `#ffb700`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#ffb700`,
});

export const hover_yellow = tss({
  SELECTOR: `=@:hover`,
  color:    `#ffd700`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#ffd700`,
});

export const hover_light_yellow = tss({
  SELECTOR: `=@:hover`,
  color:    `#fbf1a9`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#fbf1a9`,
});

export const hover_purple = tss({
  SELECTOR: `=@:hover`,
  color:    `#5e2ca5`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#5e2ca5`,
});

export const hover_light_purple = tss({
  SELECTOR: `=@:hover`,
  color:    `#a463f2`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#a463f2`,
});

export const hover_dark_pink = tss({
  SELECTOR: `=@:hover`,
  color:    `#d5008f`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#d5008f`,
});

export const hover_hot_pink = tss({
  SELECTOR: `=@:hover`,
  color:    `#ff41b4`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#ff41b4`,
});

export const hover_pink = tss({
  SELECTOR: `=@:hover`,
  color:    `#ff80cc`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#ff80cc`,
});

export const hover_light_pink = tss({
  SELECTOR: `=@:hover`,
  color:    `#ffa3d7`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#ffa3d7`,
});

export const hover_dark_green = tss({
  SELECTOR: `=@:hover`,
  color:    `#137752`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#137752`,
});

export const hover_green = tss({
  SELECTOR: `=@:hover`,
  color:    `#19a974`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#19a974`,
});

export const hover_light_green = tss({
  SELECTOR: `=@:hover`,
  color:    `#9eebcf`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#9eebcf`,
});

export const hover_navy = tss({
  SELECTOR: `=@:hover`,
  color:    `#001b44`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#001b44`,
});

export const hover_dark_blue = tss({
  SELECTOR: `=@:hover`,
  color:    `#00449e`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#00449e`,
});

export const hover_blue = tss({
  SELECTOR: `=@:hover`,
  color:    `#357edd`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#357edd`,
});

export const hover_light_blue = tss({
  SELECTOR: `=@:hover`,
  color:    `#96ccff`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#96ccff`,
});

export const hover_lightest_blue = tss({
  SELECTOR: `=@:hover`,
  color:    `#cdecff`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#cdecff`,
});

export const hover_washed_blue = tss({
  SELECTOR: `=@:hover`,
  color:    `#f6fffe`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#f6fffe`,
});

export const hover_washed_green = tss({
  SELECTOR: `=@:hover`,
  color:    `#e8fdf5`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#e8fdf5`,
});

export const hover_washed_yellow = tss({
  SELECTOR: `=@:hover`,
  color:    `#fffceb`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#fffceb`,
});

export const hover_washed_red = tss({
  SELECTOR: `=@:hover`,
  color:    `#ffdfdf`,
}, {
  SELECTOR: `=@:focus`,
  color:    `#ffdfdf`,
});

export const hover_bg_dark_red = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#e7040f`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#e7040f`,
});

export const hover_bg_red = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#ff4136`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#ff4136`,
});

export const hover_bg_light_red = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#ff725c`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#ff725c`,
});

export const hover_bg_orange = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#ff6300`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#ff6300`,
});

export const hover_bg_gold = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#ffb700`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#ffb700`,
});

export const hover_bg_yellow = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#ffd700`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#ffd700`,
});

export const hover_bg_light_yellow = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#fbf1a9`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#fbf1a9`,
});

export const hover_bg_purple = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#5e2ca5`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#5e2ca5`,
});

export const hover_bg_light_purple = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#a463f2`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#a463f2`,
});

export const hover_bg_dark_pink = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#d5008f`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#d5008f`,
});

export const hover_bg_hot_pink = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#ff41b4`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#ff41b4`,
});

export const hover_bg_pink = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#ff80cc`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#ff80cc`,
});

export const hover_bg_light_pink = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#ffa3d7`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#ffa3d7`,
});

export const hover_bg_dark_green = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#137752`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#137752`,
});

export const hover_bg_green = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#19a974`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#19a974`,
});

export const hover_bg_light_green = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#9eebcf`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#9eebcf`,
});

export const hover_bg_navy = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#001b44`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#001b44`,
});

export const hover_bg_dark_blue = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#00449e`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#00449e`,
});

export const hover_bg_blue = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#357edd`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#357edd`,
});

export const hover_bg_light_blue = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#96ccff`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#96ccff`,
});

export const hover_bg_lightest_blue = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#cdecff`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#cdecff`,
});

export const hover_bg_washed_blue = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#f6fffe`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#f6fffe`,
});

export const hover_bg_washed_green = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#e8fdf5`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#e8fdf5`,
});

export const hover_bg_washed_yellow = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#fffceb`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#fffceb`,
});

export const hover_bg_washed_red = tss({
  SELECTOR:         `=@:hover`,
  background_color: `#ffdfdf`,
}, {
  SELECTOR:         `=@:focus`,
  background_color: `#ffdfdf`,
});

export const hover_bg_inherit = tss({
  SELECTOR:         [`=@:hover`, `=@:focus`],
  background_color: `inherit`,
});

export const pa0 = tss({
  padding: `0`,
});

export const pa1 = tss({
  padding: `.25rem`,
});

export const pa2 = tss({
  padding: `.5rem`,
});

export const pa3 = tss({
  padding: `1rem`,
});

export const pa4 = tss({
  padding: `2rem`,
});

export const pa5 = tss({
  padding: `4rem`,
});

export const pa6 = tss({
  padding: `8rem`,
});

export const pa7 = tss({
  padding: `16rem`,
});

export const pl0 = tss({
  padding_left: `0`,
});

export const pl1 = tss({
  padding_left: `.25rem`,
});

export const pl2 = tss({
  padding_left: `.5rem`,
});

export const pl3 = tss({
  padding_left: `1rem`,
});

export const pl4 = tss({
  padding_left: `2rem`,
});

export const pl5 = tss({
  padding_left: `4rem`,
});

export const pl6 = tss({
  padding_left: `8rem`,
});

export const pl7 = tss({
  padding_left: `16rem`,
});

export const pr0 = tss({
  padding_right: `0`,
});

export const pr1 = tss({
  padding_right: `.25rem`,
});

export const pr2 = tss({
  padding_right: `.5rem`,
});

export const pr3 = tss({
  padding_right: `1rem`,
});

export const pr4 = tss({
  padding_right: `2rem`,
});

export const pr5 = tss({
  padding_right: `4rem`,
});

export const pr6 = tss({
  padding_right: `8rem`,
});

export const pr7 = tss({
  padding_right: `16rem`,
});

export const pb0 = tss({
  padding_bottom: `0`,
});

export const pb1 = tss({
  padding_bottom: `.25rem`,
});

export const pb2 = tss({
  padding_bottom: `.5rem`,
});

export const pb3 = tss({
  padding_bottom: `1rem`,
});

export const pb4 = tss({
  padding_bottom: `2rem`,
});

export const pb5 = tss({
  padding_bottom: `4rem`,
});

export const pb6 = tss({
  padding_bottom: `8rem`,
});

export const pb7 = tss({
  padding_bottom: `16rem`,
});

export const pt0 = tss({
  padding_top: `0`,
});

export const pt1 = tss({
  padding_top: `.25rem`,
});

export const pt2 = tss({
  padding_top: `.5rem`,
});

export const pt3 = tss({
  padding_top: `1rem`,
});

export const pt4 = tss({
  padding_top: `2rem`,
});

export const pt5 = tss({
  padding_top: `4rem`,
});

export const pt6 = tss({
  padding_top: `8rem`,
});

export const pt7 = tss({
  padding_top: `16rem`,
});

export const pv0 = tss({
  padding_top:    `0`,
  padding_bottom: `0`,
});

export const pv1 = tss({
  padding_top:    `.25rem`,
  padding_bottom: `.25rem`,
});

export const pv2 = tss({
  padding_top:    `.5rem`,
  padding_bottom: `.5rem`,
});

export const pv3 = tss({
  padding_top:    `1rem`,
  padding_bottom: `1rem`,
});

export const pv4 = tss({
  padding_top:    `2rem`,
  padding_bottom: `2rem`,
});

export const pv5 = tss({
  padding_top:    `4rem`,
  padding_bottom: `4rem`,
});

export const pv6 = tss({
  padding_top:    `8rem`,
  padding_bottom: `8rem`,
});

export const pv7 = tss({
  padding_top:    `16rem`,
  padding_bottom: `16rem`,
});

export const ph0 = tss({
  padding_left:  `0`,
  padding_right: `0`,
});

export const ph1 = tss({
  padding_left:  `.25rem`,
  padding_right: `.25rem`,
});

export const ph2 = tss({
  padding_left:  `.5rem`,
  padding_right: `.5rem`,
});

export const ph3 = tss({
  padding_left:  `1rem`,
  padding_right: `1rem`,
});

export const ph4 = tss({
  padding_left:  `2rem`,
  padding_right: `2rem`,
});

export const ph5 = tss({
  padding_left:  `4rem`,
  padding_right: `4rem`,
});

export const ph6 = tss({
  padding_left:  `8rem`,
  padding_right: `8rem`,
});

export const ph7 = tss({
  padding_left:  `16rem`,
  padding_right: `16rem`,
});

export const ma0 = tss({
  margin: `0`,
});

export const ma1 = tss({
  margin: `.25rem`,
});

export const ma2 = tss({
  margin: `.5rem`,
});

export const ma3 = tss({
  margin: `1rem`,
});

export const ma4 = tss({
  margin: `2rem`,
});

export const ma5 = tss({
  margin: `4rem`,
});

export const ma6 = tss({
  margin: `8rem`,
});

export const ma7 = tss({
  margin: `16rem`,
});

export const ml0 = tss({
  margin_left: `0`,
});

export const ml1 = tss({
  margin_left: `.25rem`,
});

export const ml2 = tss({
  margin_left: `.5rem`,
});

export const ml3 = tss({
  margin_left: `1rem`,
});

export const ml4 = tss({
  margin_left: `2rem`,
});

export const ml5 = tss({
  margin_left: `4rem`,
});

export const ml6 = tss({
  margin_left: `8rem`,
});

export const ml7 = tss({
  margin_left: `16rem`,
});

export const mr0 = tss({
  margin_right: `0`,
});

export const mr1 = tss({
  margin_right: `.25rem`,
});

export const mr2 = tss({
  margin_right: `.5rem`,
});

export const mr3 = tss({
  margin_right: `1rem`,
});

export const mr4 = tss({
  margin_right: `2rem`,
});

export const mr5 = tss({
  margin_right: `4rem`,
});

export const mr6 = tss({
  margin_right: `8rem`,
});

export const mr7 = tss({
  margin_right: `16rem`,
});

export const mb0 = tss({
  margin_bottom: `0`,
});

export const mb1 = tss({
  margin_bottom: `.25rem`,
});

export const mb2 = tss({
  margin_bottom: `.5rem`,
});

export const mb3 = tss({
  margin_bottom: `1rem`,
});

export const mb4 = tss({
  margin_bottom: `2rem`,
});

export const mb5 = tss({
  margin_bottom: `4rem`,
});

export const mb6 = tss({
  margin_bottom: `8rem`,
});

export const mb7 = tss({
  margin_bottom: `16rem`,
});

export const mt0 = tss({
  margin_top: `0`,
});

export const mt1 = tss({
  margin_top: `.25rem`,
});

export const mt2 = tss({
  margin_top: `.5rem`,
});

export const mt3 = tss({
  margin_top: `1rem`,
});

export const mt4 = tss({
  margin_top: `2rem`,
});

export const mt5 = tss({
  margin_top: `4rem`,
});

export const mt6 = tss({
  margin_top: `8rem`,
});

export const mt7 = tss({
  margin_top: `16rem`,
});

export const mv0 = tss({
  margin_top:    `0`,
  margin_bottom: `0`,
});

export const mv1 = tss({
  margin_top:    `.25rem`,
  margin_bottom: `.25rem`,
});

export const mv2 = tss({
  margin_top:    `.5rem`,
  margin_bottom: `.5rem`,
});

export const mv3 = tss({
  margin_top:    `1rem`,
  margin_bottom: `1rem`,
});

export const mv4 = tss({
  margin_top:    `2rem`,
  margin_bottom: `2rem`,
});

export const mv5 = tss({
  margin_top:    `4rem`,
  margin_bottom: `4rem`,
});

export const mv6 = tss({
  margin_top:    `8rem`,
  margin_bottom: `8rem`,
});

export const mv7 = tss({
  margin_top:    `16rem`,
  margin_bottom: `16rem`,
});

export const mh0 = tss({
  margin_left:  `0`,
  margin_right: `0`,
});

export const mh1 = tss({
  margin_left:  `.25rem`,
  margin_right: `.25rem`,
});

export const mh2 = tss({
  margin_left:  `.5rem`,
  margin_right: `.5rem`,
});

export const mh3 = tss({
  margin_left:  `1rem`,
  margin_right: `1rem`,
});

export const mh4 = tss({
  margin_left:  `2rem`,
  margin_right: `2rem`,
});

export const mh5 = tss({
  margin_left:  `4rem`,
  margin_right: `4rem`,
});

export const mh6 = tss({
  margin_left:  `8rem`,
  margin_right: `8rem`,
});

export const mh7 = tss({
  margin_left:  `16rem`,
  margin_right: `16rem`,
});

export const na1 = tss({
  margin: `-0.25rem`,
});

export const na2 = tss({
  margin: `-0.5rem`,
});

export const na3 = tss({
  margin: `-1rem`,
});

export const na4 = tss({
  margin: `-2rem`,
});

export const na5 = tss({
  margin: `-4rem`,
});

export const na6 = tss({
  margin: `-8rem`,
});

export const na7 = tss({
  margin: `-16rem`,
});

export const nl1 = tss({
  margin_left: `-0.25rem`,
});

export const nl2 = tss({
  margin_left: `-0.5rem`,
});

export const nl3 = tss({
  margin_left: `-1rem`,
});

export const nl4 = tss({
  margin_left: `-2rem`,
});

export const nl5 = tss({
  margin_left: `-4rem`,
});

export const nl6 = tss({
  margin_left: `-8rem`,
});

export const nl7 = tss({
  margin_left: `-16rem`,
});

export const nr1 = tss({
  margin_right: `-0.25rem`,
});

export const nr2 = tss({
  margin_right: `-0.5rem`,
});

export const nr3 = tss({
  margin_right: `-1rem`,
});

export const nr4 = tss({
  margin_right: `-2rem`,
});

export const nr5 = tss({
  margin_right: `-4rem`,
});

export const nr6 = tss({
  margin_right: `-8rem`,
});

export const nr7 = tss({
  margin_right: `-16rem`,
});

export const nb1 = tss({
  margin_bottom: `-0.25rem`,
});

export const nb2 = tss({
  margin_bottom: `-0.5rem`,
});

export const nb3 = tss({
  margin_bottom: `-1rem`,
});

export const nb4 = tss({
  margin_bottom: `-2rem`,
});

export const nb5 = tss({
  margin_bottom: `-4rem`,
});

export const nb6 = tss({
  margin_bottom: `-8rem`,
});

export const nb7 = tss({
  margin_bottom: `-16rem`,
});

export const nt1 = tss({
  margin_top: `-0.25rem`,
});

export const nt2 = tss({
  margin_top: `-0.5rem`,
});

export const nt3 = tss({
  margin_top: `-1rem`,
});

export const nt4 = tss({
  margin_top: `-2rem`,
});

export const nt5 = tss({
  margin_top: `-4rem`,
});

export const nt6 = tss({
  margin_top: `-8rem`,
});

export const nt7 = tss({
  margin_top: `-16rem`,
});

export const collapse = tss({
  border_collapse: `collapse`,
  border_spacing:  `0`,
});

export const striped__light_silver = tss({
  SELECTOR:         `=@:nth-child(odd)`,
  background_color: `#aaa`,
});

export const striped__moon_gray = tss({
  SELECTOR:         `=@:nth-child(odd)`,
  background_color: `#ccc`,
});

export const striped__light_gray = tss({
  SELECTOR:         `=@:nth-child(odd)`,
  background_color: `#eee`,
});

export const striped__near_white = tss({
  SELECTOR:         `=@:nth-child(odd)`,
  background_color: `#f4f4f4`,
});

export const stripe_light = tss({
  SELECTOR:         `=@:nth-child(odd)`,
  background_color: `rgba( 255, 255, 255, .1 )`,
});

export const stripe_dark = tss({
  SELECTOR:         `=@:nth-child(odd)`,
  background_color: `rgba( 0, 0, 0, .1 )`,
});

export const strike = tss({
  text_decoration: `line-through`,
});

export const underline = tss({
  text_decoration: `underline`,
});

export const no_underline = tss({
  text_decoration: `none`,
});

export const tl = tss({
  text_align: `left`,
});

export const tr = tss({
  text_align: `right`,
});

export const tc = tss({
  text_align: `center`,
});

export const tj = tss({
  text_align: `justify`,
});

export const ttc = tss({
  text_transform: `capitalize`,
});

export const ttl = tss({
  text_transform: `lowercase`,
});

export const ttu = tss({
  text_transform: `uppercase`,
});

export const ttn = tss({
  text_transform: `none`,
});

export const f_6 = tss(tssCommon__3);

export const f_headline = tss(tssCommon__3);

export const f_5 = tss(tssCommon__4);

export const f_subheadline = tss(tssCommon__4);

export const f1 = tss({
  font_size: `3rem`,
});

export const f2 = tss({
  font_size: `2.25rem`,
});

export const f3 = tss({
  font_size: `1.5rem`,
});

export const f4 = tss({
  font_size: `1.25rem`,
});

export const f5 = tss({
  font_size: `1rem`,
});

export const f6 = tss({
  font_size: `.875rem`,
});

export const f7 = tss({
  font_size: `.75rem`,
});

export const measure = tss({
  max_width: `30em`,
});

export const measure_wide = tss({
  max_width: `34em`,
});

export const measure_narrow = tss({
  max_width: `20em`,
});

export const indent = tss({
  text_indent:   `1em`,
  margin_top:    `0`,
  margin_bottom: `0`,
});

export const small_caps = tss({
  font_variant: `small-caps`,
});

export const truncate = tss({
  white_space:   `nowrap`,
  overflow:      `hidden`,
  text_overflow: `ellipsis`,
});

export const overflow_container = tss({
  overflow_y: `scroll`,
});

export const center = tss({
  margin_right: `auto`,
  margin_left:  `auto`,
});

export const mr_auto = tss({
  margin_right: `auto`,
});

export const ml_auto = tss({
  margin_left: `auto`,
});

export const clip = tss({
  position:  `fixed !important`,
  _position: `absolute !important`,
  clip:      [`rect( 1px 1px 1px 1px )`,`rect( 1px, 1px, 1px, 1px )`],
});

export const ws_normal = tss({
  white_space: `normal`,
});

export const nowrap = tss({
  white_space: `nowrap`,
});

export const v_base = tss({
  vertical_align: `baseline`,
});

export const v_mid = tss({
  vertical_align: `middle`,
});

export const v_top = tss({
  vertical_align: `top`,
});

export const v_btm = tss({
  vertical_align: `bottom`,
});

export const dim = tss({
  opacity:    `1`,
  transition: `opacity .15s ease-in`,
}, {
  SELECTOR:   [`=@:hover`, `=@:focus`],
  opacity:    `.5`,
  transition: `opacity .15s ease-in`,
}, {
  SELECTOR:   `=@:active`,
  opacity:    `.8`,
  transition: `opacity .15s ease-out`,
});

export const glow = tss({
  transition: `opacity .15s ease-in`,
}, {
  SELECTOR:   [`=@:hover`, `=@:focus`],
  opacity:    `1`,
  transition: `opacity .15s ease-in`,
});

export const child = tss();

export const hide_child = tss({
  SELECTOR:   query(`@ %`, child),
  opacity:    `0`,
  transition: `opacity .15s ease-in`,
}, {
  SELECTOR:   [query(`@:hover  %`, child), query(`@:focus  %`, child), query(`@:active %`, child)],
  opacity:    `1`,
  transition: `opacity .15s ease-in`,
});

export const underline_hover = tss({
  SELECTOR:        [`=@:hover`, `=@:focus`],
  text_decoration: `underline`,
});

export const grow = tss({
  _moz_osx_font_smoothing:  `grayscale`,
  _webkit_backface_visibility: `hidden`,
  backface_visibility:      `hidden`,
  _webkit_transform:        `translateZ( 0 )`,
  transform:                `translateZ( 0 )`,
  transition:               [`-webkit-transform .25s ease-out`,`transform .25s ease-out`,`transform .25s ease-out, -webkit-transform .25s ease-out`],
}, {
  SELECTOR:          [`=@:hover`, `=@:focus`],
  _webkit_transform: `scale( 1.05 )`,
  transform:         `scale( 1.05 )`,
}, {
  SELECTOR:          `=@:active`,
  _webkit_transform: `scale( .90 )`,
  transform:         `scale( .90 )`,
});

export const grow_large = tss({
  _moz_osx_font_smoothing:  `grayscale`,
  _webkit_backface_visibility: `hidden`,
  backface_visibility:      `hidden`,
  _webkit_transform:        `translateZ( 0 )`,
  transform:                `translateZ( 0 )`,
  transition:               [`-webkit-transform .25s ease-in-out`,`transform .25s ease-in-out`,`transform .25s ease-in-out, -webkit-transform .25s ease-in-out`],
}, {
  SELECTOR:          [`=@:hover`, `=@:focus`],
  _webkit_transform: `scale( 1.2 )`,
  transform:         `scale( 1.2 )`,
}, {
  SELECTOR:          `=@:active`,
  _webkit_transform: `scale( .95 )`,
  transform:         `scale( .95 )`,
});

export const pointer = tss({
  SELECTOR: `=@:hover`,
  cursor:   `pointer`,
});

export const shadow_hover = tss({
  cursor:     `pointer`,
  position:   `relative`,
  transition: `all .5s cubic-bezier( .165, .84, .44, 1 )`,
}, {
  SELECTOR:      `=@::after`,
  content:       `''`,
  box_shadow:    `0 0 16px 2px rgba( 0, 0, 0, .2 )`,
  border_radius: `inherit`,
  opacity:       `0`,
  position:      `absolute`,
  top:           `0`,
  left:          `0`,
  width:         `100%`,
  height:        `100%`,
  z_index:       `-1`,
  transition:    `opacity .5s cubic-bezier( .165, .84, .44, 1 )`,
}, {
  SELECTOR: [`=@:hover::after`, `=@:focus::after`],
  opacity:  `1`,
});

export const bg_animate = tss({
  SELECTOR:   [`=@:hover`, `=@:focus`],
  transition: `background-color .15s ease-in-out`,
});

export const z_0 = tss({
  z_index: `0`,
});

export const z_1 = tss({
  z_index: `1`,
});

export const z_2 = tss({
  z_index: `2`,
});

export const z_3 = tss({
  z_index: `3`,
});

export const z_4 = tss({
  z_index: `4`,
});

export const z_5 = tss({
  z_index: `5`,
});

export const z_999 = tss({
  z_index: `999`,
});

export const z_9999 = tss({
  z_index: `9999`,
});

export const z_max = tss({
  z_index: `2147483647`,
});

export const z_inherit = tss({
  z_index: `inherit`,
});

export const z_initial = tss({
  z_index: `initial`,
});

export const z_unset = tss({
  z_index: `unset`,
});

export const nested_copy_line_height = tss({
  SELECTOR:    [`p`, `ul`, `ol`],
  line_height: `1.5`,
});

export const nested_headline_line_height = tss({
  SELECTOR:    [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
  line_height: `1.25`,
});

export const nested_list_reset = tss({
  SELECTOR:        [`ul`, `ol`],
  padding_left:    `0`,
  margin_left:     `0`,
  list_style_type: `none`,
});

export const nested_copy_indent = tss({
  SELECTOR:      `p+p`,
  text_indent:   `1em`,
  margin_top:    `0`,
  margin_bottom: `0`,
});

export const nested_copy_separator = tss({
  SELECTOR:   `p+p`,
  margin_top: `1.5em`,
});

export const nested_img = tss({
  SELECTOR:  `img`,
  width:     `100%`,
  max_width: `100%`,
  display:   `block`,
});

export const nested_links = tss({
  SELECTOR:   `a`,
  color:      `#357edd`,
  transition: `color .15s ease-in`,
}, {
  SELECTOR:   `a:hover`,
  color:      `#96ccff`,
  transition: `color .15s ease-in`,
}, {
  SELECTOR:   `a:focus`,
  color:      `#96ccff`,
  transition: `color .15s ease-in`,
});

export const debug = tss({
  SELECTOR: `*`,
  outline:  `1px solid gold`,
});

export const debug_white = tss({
  SELECTOR: `*`,
  outline:  `1px solid white`,
});

export const debug_black = tss({
  SELECTOR: `*`,
  outline:  `1px solid black`,
});

export const debug_grid = tss({
  background: `transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII= ) repeat top left`,
});

export const debug_grid_16 = tss({
  background: `transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8sEuo8AAAAASUVORK5CYII= ) repeat top left`,
});

export const debug_grid_8_solid = tss({
  background: `white url( data:image/gif;base64,R0lGODdhCAAIAPEAAADw/wDx/////wAAACwAAAAACAAIAAACDZQvgaeb/lxbAIKA8y0AOw== ) repeat top left`,
});

export const debug_grid_16_solid = tss({
  background: `white url( data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7 ) repeat top left`,
});

export const aspect_ratio_ns = tss({
  MEDIA:    tssMedia__1,
  height:   `0`,
  position: `relative`,
});

export const aspect_ratio__16x9_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `56.25%`,
});

export const aspect_ratio__9x16_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `177.77%`,
});

export const aspect_ratio__4x3_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `75%`,
});

export const aspect_ratio__3x4_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `133.33%`,
});

export const aspect_ratio__6x4_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `66.6%`,
});

export const aspect_ratio__4x6_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `150%`,
});

export const aspect_ratio__8x5_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `62.5%`,
});

export const aspect_ratio__5x8_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `160%`,
});

export const aspect_ratio__7x5_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `71.42%`,
});

export const aspect_ratio__5x7_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `140%`,
});

export const aspect_ratio__1x1_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `100%`,
});

export const aspect_ratio__object_ns = tss({
  MEDIA:    tssMedia__1,
  position: `absolute`,
  top:      `0`,
  right:    `0`,
  bottom:   `0`,
  left:     `0`,
  width:    `100%`,
  height:   `100%`,
  z_index:  `100`,
});

export const cover_ns = tss({
  MEDIA:           tssMedia__1,
  background_size: `cover !important`,
});

export const contain_ns = tss({
  MEDIA:           tssMedia__1,
  background_size: `contain !important`,
});

export const bg_center_ns = tss({
  MEDIA:               tssMedia__1,
  background_repeat:   `no-repeat`,
  background_position: `center center`,
});

export const bg_top_ns = tss({
  MEDIA:               tssMedia__1,
  background_repeat:   `no-repeat`,
  background_position: `top center`,
});

export const bg_right_ns = tss({
  MEDIA:               tssMedia__1,
  background_repeat:   `no-repeat`,
  background_position: `center right`,
});

export const bg_bottom_ns = tss({
  MEDIA:               tssMedia__1,
  background_repeat:   `no-repeat`,
  background_position: `bottom center`,
});

export const bg_left_ns = tss({
  MEDIA:               tssMedia__1,
  background_repeat:   `no-repeat`,
  background_position: `center left`,
});

export const outline_ns = tss({
  MEDIA:   tssMedia__1,
  outline: `1px solid`,
});

export const outline_transparent_ns = tss({
  MEDIA:   tssMedia__1,
  outline: `1px solid transparent`,
});

export const outline_0_ns = tss({
  MEDIA:   tssMedia__1,
  outline: `0`,
});

export const ba_ns = tss({
  MEDIA:        tssMedia__1,
  border_style: `solid`,
  border_width: `1px`,
});

export const bt_ns = tss({
  MEDIA:            tssMedia__1,
  border_top_style: `solid`,
  border_top_width: `1px`,
});

export const br_ns = tss({
  MEDIA:              tssMedia__1,
  border_right_style: `solid`,
  border_right_width: `1px`,
});

export const bb_ns = tss({
  MEDIA:               tssMedia__1,
  border_bottom_style: `solid`,
  border_bottom_width: `1px`,
});

export const bl_ns = tss({
  MEDIA:             tssMedia__1,
  border_left_style: `solid`,
  border_left_width: `1px`,
});

export const bn_ns = tss({
  MEDIA:        tssMedia__1,
  border_style: `none`,
  border_width: `0`,
});

export const br0_ns = tss({
  MEDIA:         tssMedia__1,
  border_radius: `0`,
});

export const br1_ns = tss({
  MEDIA:         tssMedia__1,
  border_radius: `.125rem`,
});

export const br2_ns = tss({
  MEDIA:         tssMedia__1,
  border_radius: `.25rem`,
});

export const br3_ns = tss({
  MEDIA:         tssMedia__1,
  border_radius: `.5rem`,
});

export const br4_ns = tss({
  MEDIA:         tssMedia__1,
  border_radius: `1rem`,
});

export const br_100_ns = tss({
  MEDIA:         tssMedia__1,
  border_radius: `100%`,
});

export const br_pill_ns = tss({
  MEDIA:         tssMedia__1,
  border_radius: `9999px`,
});

export const br__bottom_ns = tss({
  MEDIA:                   tssMedia__1,
  border_top_left_radius:  `0`,
  border_top_right_radius: `0`,
});

export const br__top_ns = tss({
  MEDIA:                    tssMedia__1,
  border_bottom_left_radius: `0`,
  border_bottom_right_radius: `0`,
});

export const br__right_ns = tss({
  MEDIA:                    tssMedia__1,
  border_top_left_radius:   `0`,
  border_bottom_left_radius: `0`,
});

export const br__left_ns = tss({
  MEDIA:                    tssMedia__1,
  border_top_right_radius:  `0`,
  border_bottom_right_radius: `0`,
});

export const b__dotted_ns = tss({
  MEDIA:        tssMedia__1,
  border_style: `dotted`,
});

export const b__dashed_ns = tss({
  MEDIA:        tssMedia__1,
  border_style: `dashed`,
});

export const b__solid_ns = tss({
  MEDIA:        tssMedia__1,
  border_style: `solid`,
});

export const b__none_ns = tss({
  MEDIA:        tssMedia__1,
  border_style: `none`,
});

export const bw0_ns = tss({
  MEDIA:        tssMedia__1,
  border_width: `0`,
});

export const bw1_ns = tss({
  MEDIA:        tssMedia__1,
  border_width: `.125rem`,
});

export const bw2_ns = tss({
  MEDIA:        tssMedia__1,
  border_width: `.25rem`,
});

export const bw3_ns = tss({
  MEDIA:        tssMedia__1,
  border_width: `.5rem`,
});

export const bw4_ns = tss({
  MEDIA:        tssMedia__1,
  border_width: `1rem`,
});

export const bw5_ns = tss({
  MEDIA:        tssMedia__1,
  border_width: `2rem`,
});

export const bt_0_ns = tss({
  MEDIA:            tssMedia__1,
  border_top_width: `0`,
});

export const br_0_ns = tss({
  MEDIA:              tssMedia__1,
  border_right_width: `0`,
});

export const bb_0_ns = tss({
  MEDIA:               tssMedia__1,
  border_bottom_width: `0`,
});

export const bl_0_ns = tss({
  MEDIA:             tssMedia__1,
  border_left_width: `0`,
});

export const shadow_1_ns = tss({
  MEDIA:      tssMedia__1,
  box_shadow: `0 0 4px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_2_ns = tss({
  MEDIA:      tssMedia__1,
  box_shadow: `0 0 8px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_3_ns = tss({
  MEDIA:      tssMedia__1,
  box_shadow: `2px 2px 4px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_4_ns = tss({
  MEDIA:      tssMedia__1,
  box_shadow: `2px 2px 8px 0 rgba( 0, 0, 0, .2 )`,
});

export const shadow_5_ns = tss({
  MEDIA:      tssMedia__1,
  box_shadow: `4px 4px 8px 0 rgba( 0, 0, 0, .2 )`,
});

export const top_0_ns = tss({
  MEDIA: tssMedia__1,
  top:   `0`,
});

export const left_0_ns = tss({
  MEDIA: tssMedia__1,
  left:  `0`,
});

export const right_0_ns = tss({
  MEDIA: tssMedia__1,
  right: `0`,
});

export const bottom_0_ns = tss({
  MEDIA:  tssMedia__1,
  bottom: `0`,
});

export const top_1_ns = tss({
  MEDIA: tssMedia__1,
  top:   `1rem`,
});

export const left_1_ns = tss({
  MEDIA: tssMedia__1,
  left:  `1rem`,
});

export const right_1_ns = tss({
  MEDIA: tssMedia__1,
  right: `1rem`,
});

export const bottom_1_ns = tss({
  MEDIA:  tssMedia__1,
  bottom: `1rem`,
});

export const top_2_ns = tss({
  MEDIA: tssMedia__1,
  top:   `2rem`,
});

export const left_2_ns = tss({
  MEDIA: tssMedia__1,
  left:  `2rem`,
});

export const right_2_ns = tss({
  MEDIA: tssMedia__1,
  right: `2rem`,
});

export const bottom_2_ns = tss({
  MEDIA:  tssMedia__1,
  bottom: `2rem`,
});

export const top__1_ns = tss({
  MEDIA: tssMedia__1,
  top:   `-1rem`,
});

export const right__1_ns = tss({
  MEDIA: tssMedia__1,
  right: `-1rem`,
});

export const bottom__1_ns = tss({
  MEDIA:  tssMedia__1,
  bottom: `-1rem`,
});

export const left__1_ns = tss({
  MEDIA: tssMedia__1,
  left:  `-1rem`,
});

export const top__2_ns = tss({
  MEDIA: tssMedia__1,
  top:   `-2rem`,
});

export const right__2_ns = tss({
  MEDIA: tssMedia__1,
  right: `-2rem`,
});

export const bottom__2_ns = tss({
  MEDIA:  tssMedia__1,
  bottom: `-2rem`,
});

export const left__2_ns = tss({
  MEDIA: tssMedia__1,
  left:  `-2rem`,
});

export const absolute__fill_ns = tss({
  MEDIA:  tssMedia__1,
  top:    `0`,
  right:  `0`,
  bottom: `0`,
  left:   `0`,
});

export const cl_ns = tss({
  MEDIA: tssMedia__1,
  clear: `left`,
});

export const cr_ns = tss({
  MEDIA: tssMedia__1,
  clear: `right`,
});

export const cb_ns = tss({
  MEDIA: tssMedia__1,
  clear: `both`,
});

export const cn_ns = tss({
  MEDIA: tssMedia__1,
  clear: `none`,
});

export const dn_ns = tss({
  MEDIA:   tssMedia__1,
  display: `none`,
});

export const di_ns = tss({
  MEDIA:   tssMedia__1,
  display: `inline`,
});

export const db_ns = tss({
  MEDIA:   tssMedia__1,
  display: `block`,
});

export const dib_ns = tss({
  MEDIA:   tssMedia__1,
  display: `inline-block`,
});

export const dit_ns = tss({
  MEDIA:   tssMedia__1,
  display: `inline-table`,
});

export const dt_ns = tss({
  MEDIA:   tssMedia__1,
  display: `table`,
});

export const dtc_ns = tss({
  MEDIA:   tssMedia__1,
  display: `table-cell`,
});

export const dt_row_ns = tss({
  MEDIA:   tssMedia__1,
  display: `table-row`,
});

export const dt_row_group_ns = tss({
  MEDIA:   tssMedia__1,
  display: `table-row-group`,
});

export const dt_column_ns = tss({
  MEDIA:   tssMedia__1,
  display: `table-column`,
});

export const dt_column_group_ns = tss({
  MEDIA:   tssMedia__1,
  display: `table-column-group`,
});

export const dt__fixed_ns = tss({
  MEDIA:        tssMedia__1,
  table_layout: `fixed`,
  width:        `100%`,
});

export const flex_ns = tss({
  MEDIA:   tssMedia__1,
  display: `flex`,
});

export const inline_flex_ns = tss({
  MEDIA:   tssMedia__1,
  display: `inline-flex`,
});

export const flex_auto_ns = tss({
  MEDIA:      tssMedia__1,
  flex:       `1 1 auto`,
  min_width:  `0`,
  min_height: `0`,
});

export const flex_none_ns = tss({
  MEDIA: tssMedia__1,
  flex:  `none`,
});

export const flex_column_ns = tss({
  MEDIA:          tssMedia__1,
  flex_direction: `column`,
});

export const flex_row_ns = tss({
  MEDIA:          tssMedia__1,
  flex_direction: `row`,
});

export const flex_wrap_ns = tss({
  MEDIA:     tssMedia__1,
  flex_wrap: `wrap`,
});

export const flex_nowrap_ns = tss({
  MEDIA:     tssMedia__1,
  flex_wrap: `nowrap`,
});

export const flex_wrap_reverse_ns = tss({
  MEDIA:     tssMedia__1,
  flex_wrap: `wrap-reverse`,
});

export const flex_column_reverse_ns = tss({
  MEDIA:          tssMedia__1,
  flex_direction: `column-reverse`,
});

export const flex_row_reverse_ns = tss({
  MEDIA:          tssMedia__1,
  flex_direction: `row-reverse`,
});

export const items_start_ns = tss({
  MEDIA:       tssMedia__1,
  align_items: `flex-start`,
});

export const items_end_ns = tss({
  MEDIA:       tssMedia__1,
  align_items: `flex-end`,
});

export const items_center_ns = tss({
  MEDIA:       tssMedia__1,
  align_items: `center`,
});

export const items_baseline_ns = tss({
  MEDIA:       tssMedia__1,
  align_items: `baseline`,
});

export const items_stretch_ns = tss({
  MEDIA:       tssMedia__1,
  align_items: `stretch`,
});

export const self_start_ns = tss({
  MEDIA:      tssMedia__1,
  align_self: `flex-start`,
});

export const self_end_ns = tss({
  MEDIA:      tssMedia__1,
  align_self: `flex-end`,
});

export const self_center_ns = tss({
  MEDIA:      tssMedia__1,
  align_self: `center`,
});

export const self_baseline_ns = tss({
  MEDIA:      tssMedia__1,
  align_self: `baseline`,
});

export const self_stretch_ns = tss({
  MEDIA:      tssMedia__1,
  align_self: `stretch`,
});

export const justify_start_ns = tss({
  MEDIA:           tssMedia__1,
  justify_content: `flex-start`,
});

export const justify_end_ns = tss({
  MEDIA:           tssMedia__1,
  justify_content: `flex-end`,
});

export const justify_center_ns = tss({
  MEDIA:           tssMedia__1,
  justify_content: `center`,
});

export const justify_between_ns = tss({
  MEDIA:           tssMedia__1,
  justify_content: `space-between`,
});

export const justify_around_ns = tss({
  MEDIA:           tssMedia__1,
  justify_content: `space-around`,
});

export const content_start_ns = tss({
  MEDIA:         tssMedia__1,
  align_content: `flex-start`,
});

export const content_end_ns = tss({
  MEDIA:         tssMedia__1,
  align_content: `flex-end`,
});

export const content_center_ns = tss({
  MEDIA:         tssMedia__1,
  align_content: `center`,
});

export const content_between_ns = tss({
  MEDIA:         tssMedia__1,
  align_content: `space-between`,
});

export const content_around_ns = tss({
  MEDIA:         tssMedia__1,
  align_content: `space-around`,
});

export const content_stretch_ns = tss({
  MEDIA:         tssMedia__1,
  align_content: `stretch`,
});

export const order_0_ns = tss({
  MEDIA: tssMedia__1,
  order: `0`,
});

export const order_1_ns = tss({
  MEDIA: tssMedia__1,
  order: `1`,
});

export const order_2_ns = tss({
  MEDIA: tssMedia__1,
  order: `2`,
});

export const order_3_ns = tss({
  MEDIA: tssMedia__1,
  order: `3`,
});

export const order_4_ns = tss({
  MEDIA: tssMedia__1,
  order: `4`,
});

export const order_5_ns = tss({
  MEDIA: tssMedia__1,
  order: `5`,
});

export const order_6_ns = tss({
  MEDIA: tssMedia__1,
  order: `6`,
});

export const order_7_ns = tss({
  MEDIA: tssMedia__1,
  order: `7`,
});

export const order_8_ns = tss({
  MEDIA: tssMedia__1,
  order: `8`,
});

export const order_last_ns = tss({
  MEDIA: tssMedia__1,
  order: `99999`,
});

export const flex_grow_0_ns = tss({
  MEDIA:     tssMedia__1,
  flex_grow: `0`,
});

export const flex_grow_1_ns = tss({
  MEDIA:     tssMedia__1,
  flex_grow: `1`,
});

export const flex_shrink_0_ns = tss({
  MEDIA:       tssMedia__1,
  flex_shrink: `0`,
});

export const flex_shrink_1_ns = tss({
  MEDIA:       tssMedia__1,
  flex_shrink: `1`,
});

export const fl_ns = tss({
  MEDIA:    tssMedia__1,
  float:    `left`,
  _display: `inline`,
});

export const fr_ns = tss({
  MEDIA:    tssMedia__1,
  float:    `right`,
  _display: `inline`,
});

export const fn_ns = tss({
  MEDIA: tssMedia__1,
  float: `none`,
});

export const i_ns = tss({
  MEDIA:      tssMedia__1,
  font_style: `italic`,
});

export const fs_normal_ns = tss({
  MEDIA:      tssMedia__1,
  font_style: `normal`,
});

export const normal_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `normal`,
});

export const b_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `bold`,
});

export const fw1_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `100`,
});

export const fw2_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `200`,
});

export const fw3_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `300`,
});

export const fw4_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `400`,
});

export const fw5_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `500`,
});

export const fw6_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `600`,
});

export const fw7_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `700`,
});

export const fw8_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `800`,
});

export const fw9_ns = tss({
  MEDIA:       tssMedia__1,
  font_weight: `900`,
});

export const h1_ns = tss({
  MEDIA:  tssMedia__1,
  height: `1rem`,
});

export const h2_ns = tss({
  MEDIA:  tssMedia__1,
  height: `2rem`,
});

export const h3_ns = tss({
  MEDIA:  tssMedia__1,
  height: `4rem`,
});

export const h4_ns = tss({
  MEDIA:  tssMedia__1,
  height: `8rem`,
});

export const h5_ns = tss({
  MEDIA:  tssMedia__1,
  height: `16rem`,
});

export const h_25_ns = tss({
  MEDIA:  tssMedia__1,
  height: `25%`,
});

export const h_50_ns = tss({
  MEDIA:  tssMedia__1,
  height: `50%`,
});

export const h_75_ns = tss({
  MEDIA:  tssMedia__1,
  height: `75%`,
});

export const h_100_ns = tss({
  MEDIA:  tssMedia__1,
  height: `100%`,
});

export const min_h_100_ns = tss({
  MEDIA:      tssMedia__1,
  min_height: `100%`,
});

export const vh_25_ns = tss({
  MEDIA:  tssMedia__1,
  height: `25vh`,
});

export const vh_50_ns = tss({
  MEDIA:  tssMedia__1,
  height: `50vh`,
});

export const vh_75_ns = tss({
  MEDIA:  tssMedia__1,
  height: `75vh`,
});

export const vh_100_ns = tss({
  MEDIA:  tssMedia__1,
  height: `100vh`,
});

export const min_vh_100_ns = tss({
  MEDIA:      tssMedia__1,
  min_height: `100vh`,
});

export const h_auto_ns = tss({
  MEDIA:  tssMedia__1,
  height: `auto`,
});

export const h_inherit_ns = tss({
  MEDIA:  tssMedia__1,
  height: `inherit`,
});

export const tracked_ns = tss({
  MEDIA:          tssMedia__1,
  letter_spacing: `.1em`,
});

export const tracked_tight_ns = tss({
  MEDIA:          tssMedia__1,
  letter_spacing: `-.05em`,
});

export const tracked_mega_ns = tss({
  MEDIA:          tssMedia__1,
  letter_spacing: `.25em`,
});

export const lh_solid_ns = tss({
  MEDIA:       tssMedia__1,
  line_height: `1`,
});

export const lh_title_ns = tss({
  MEDIA:       tssMedia__1,
  line_height: `1.25`,
});

export const lh_copy_ns = tss({
  MEDIA:       tssMedia__1,
  line_height: `1.5`,
});

export const mw_100_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `100%`,
});

export const mw1_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `1rem`,
});

export const mw2_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `2rem`,
});

export const mw3_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `4rem`,
});

export const mw4_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `8rem`,
});

export const mw5_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `16rem`,
});

export const mw6_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `32rem`,
});

export const mw7_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `48rem`,
});

export const mw8_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `64rem`,
});

export const mw9_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `96rem`,
});

export const mw_none_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `none`,
});

export const w1_ns = tss({
  MEDIA: tssMedia__1,
  width: `1rem`,
});

export const w2_ns = tss({
  MEDIA: tssMedia__1,
  width: `2rem`,
});

export const w3_ns = tss({
  MEDIA: tssMedia__1,
  width: `4rem`,
});

export const w4_ns = tss({
  MEDIA: tssMedia__1,
  width: `8rem`,
});

export const w5_ns = tss({
  MEDIA: tssMedia__1,
  width: `16rem`,
});

export const w_10_ns = tss({
  MEDIA: tssMedia__1,
  width: `10%`,
});

export const w_20_ns = tss({
  MEDIA: tssMedia__1,
  width: `20%`,
});

export const w_25_ns = tss({
  MEDIA: tssMedia__1,
  width: `25%`,
});

export const w_30_ns = tss({
  MEDIA: tssMedia__1,
  width: `30%`,
});

export const w_33_ns = tss({
  MEDIA: tssMedia__1,
  width: `33%`,
});

export const w_34_ns = tss({
  MEDIA: tssMedia__1,
  width: `34%`,
});

export const w_40_ns = tss({
  MEDIA: tssMedia__1,
  width: `40%`,
});

export const w_50_ns = tss({
  MEDIA: tssMedia__1,
  width: `50%`,
});

export const w_60_ns = tss({
  MEDIA: tssMedia__1,
  width: `60%`,
});

export const w_70_ns = tss({
  MEDIA: tssMedia__1,
  width: `70%`,
});

export const w_75_ns = tss({
  MEDIA: tssMedia__1,
  width: `75%`,
});

export const w_80_ns = tss({
  MEDIA: tssMedia__1,
  width: `80%`,
});

export const w_90_ns = tss({
  MEDIA: tssMedia__1,
  width: `90%`,
});

export const w_100_ns = tss({
  MEDIA: tssMedia__1,
  width: `100%`,
});

export const w_third_ns = tss({
  MEDIA: tssMedia__1,
  width: `33.33333%`,
});

export const w_two_thirds_ns = tss({
  MEDIA: tssMedia__1,
  width: `66.66667%`,
});

export const w_auto_ns = tss({
  MEDIA: tssMedia__1,
  width: `auto`,
});

export const overflow_visible_ns = tss({
  MEDIA:    tssMedia__1,
  overflow: `visible`,
});

export const overflow_hidden_ns = tss({
  MEDIA:    tssMedia__1,
  overflow: `hidden`,
});

export const overflow_scroll_ns = tss({
  MEDIA:    tssMedia__1,
  overflow: `scroll`,
});

export const overflow_auto_ns = tss({
  MEDIA:    tssMedia__1,
  overflow: `auto`,
});

export const overflow_x_visible_ns = tss({
  MEDIA:      tssMedia__1,
  overflow_x: `visible`,
});

export const overflow_x_hidden_ns = tss({
  MEDIA:      tssMedia__1,
  overflow_x: `hidden`,
});

export const overflow_x_scroll_ns = tss({
  MEDIA:      tssMedia__1,
  overflow_x: `scroll`,
});

export const overflow_x_auto_ns = tss({
  MEDIA:      tssMedia__1,
  overflow_x: `auto`,
});

export const overflow_y_visible_ns = tss({
  MEDIA:      tssMedia__1,
  overflow_y: `visible`,
});

export const overflow_y_hidden_ns = tss({
  MEDIA:      tssMedia__1,
  overflow_y: `hidden`,
});

export const overflow_y_scroll_ns = tss({
  MEDIA:      tssMedia__1,
  overflow_y: `scroll`,
});

export const overflow_y_auto_ns = tss({
  MEDIA:      tssMedia__1,
  overflow_y: `auto`,
});

export const static_ns = tss({
  MEDIA:    tssMedia__1,
  position: `static`,
});

export const relative_ns = tss({
  MEDIA:    tssMedia__1,
  position: `relative`,
});

export const absolute_ns = tss({
  MEDIA:    tssMedia__1,
  position: `absolute`,
});

export const fixed_ns = tss({
  MEDIA:    tssMedia__1,
  position: `fixed`,
});

export const rotate_45_ns = tss({
  MEDIA:             tssMedia__1,
  _webkit_transform: `rotate( 45deg )`,
  transform:         `rotate( 45deg )`,
});

export const rotate_90_ns = tss({
  MEDIA:             tssMedia__1,
  _webkit_transform: `rotate( 90deg )`,
  transform:         `rotate( 90deg )`,
});

export const rotate_135_ns = tss({
  MEDIA:             tssMedia__1,
  _webkit_transform: `rotate( 135deg )`,
  transform:         `rotate( 135deg )`,
});

export const rotate_180_ns = tss({
  MEDIA:             tssMedia__1,
  _webkit_transform: `rotate( 180deg )`,
  transform:         `rotate( 180deg )`,
});

export const rotate_225_ns = tss({
  MEDIA:             tssMedia__1,
  _webkit_transform: `rotate( 225deg )`,
  transform:         `rotate( 225deg )`,
});

export const rotate_270_ns = tss({
  MEDIA:             tssMedia__1,
  _webkit_transform: `rotate( 270deg )`,
  transform:         `rotate( 270deg )`,
});

export const rotate_315_ns = tss({
  MEDIA:             tssMedia__1,
  _webkit_transform: `rotate( 315deg )`,
  transform:         `rotate( 315deg )`,
});

export const pa0_ns = tss({
  MEDIA:   tssMedia__1,
  padding: `0`,
});

export const pa1_ns = tss({
  MEDIA:   tssMedia__1,
  padding: `.25rem`,
});

export const pa2_ns = tss({
  MEDIA:   tssMedia__1,
  padding: `.5rem`,
});

export const pa3_ns = tss({
  MEDIA:   tssMedia__1,
  padding: `1rem`,
});

export const pa4_ns = tss({
  MEDIA:   tssMedia__1,
  padding: `2rem`,
});

export const pa5_ns = tss({
  MEDIA:   tssMedia__1,
  padding: `4rem`,
});

export const pa6_ns = tss({
  MEDIA:   tssMedia__1,
  padding: `8rem`,
});

export const pa7_ns = tss({
  MEDIA:   tssMedia__1,
  padding: `16rem`,
});

export const pl0_ns = tss({
  MEDIA:        tssMedia__1,
  padding_left: `0`,
});

export const pl1_ns = tss({
  MEDIA:        tssMedia__1,
  padding_left: `.25rem`,
});

export const pl2_ns = tss({
  MEDIA:        tssMedia__1,
  padding_left: `.5rem`,
});

export const pl3_ns = tss({
  MEDIA:        tssMedia__1,
  padding_left: `1rem`,
});

export const pl4_ns = tss({
  MEDIA:        tssMedia__1,
  padding_left: `2rem`,
});

export const pl5_ns = tss({
  MEDIA:        tssMedia__1,
  padding_left: `4rem`,
});

export const pl6_ns = tss({
  MEDIA:        tssMedia__1,
  padding_left: `8rem`,
});

export const pl7_ns = tss({
  MEDIA:        tssMedia__1,
  padding_left: `16rem`,
});

export const pr0_ns = tss({
  MEDIA:         tssMedia__1,
  padding_right: `0`,
});

export const pr1_ns = tss({
  MEDIA:         tssMedia__1,
  padding_right: `.25rem`,
});

export const pr2_ns = tss({
  MEDIA:         tssMedia__1,
  padding_right: `.5rem`,
});

export const pr3_ns = tss({
  MEDIA:         tssMedia__1,
  padding_right: `1rem`,
});

export const pr4_ns = tss({
  MEDIA:         tssMedia__1,
  padding_right: `2rem`,
});

export const pr5_ns = tss({
  MEDIA:         tssMedia__1,
  padding_right: `4rem`,
});

export const pr6_ns = tss({
  MEDIA:         tssMedia__1,
  padding_right: `8rem`,
});

export const pr7_ns = tss({
  MEDIA:         tssMedia__1,
  padding_right: `16rem`,
});

export const pb0_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `0`,
});

export const pb1_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `.25rem`,
});

export const pb2_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `.5rem`,
});

export const pb3_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `1rem`,
});

export const pb4_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `2rem`,
});

export const pb5_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `4rem`,
});

export const pb6_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `8rem`,
});

export const pb7_ns = tss({
  MEDIA:          tssMedia__1,
  padding_bottom: `16rem`,
});

export const pt0_ns = tss({
  MEDIA:       tssMedia__1,
  padding_top: `0`,
});

export const pt1_ns = tss({
  MEDIA:       tssMedia__1,
  padding_top: `.25rem`,
});

export const pt2_ns = tss({
  MEDIA:       tssMedia__1,
  padding_top: `.5rem`,
});

export const pt3_ns = tss({
  MEDIA:       tssMedia__1,
  padding_top: `1rem`,
});

export const pt4_ns = tss({
  MEDIA:       tssMedia__1,
  padding_top: `2rem`,
});

export const pt5_ns = tss({
  MEDIA:       tssMedia__1,
  padding_top: `4rem`,
});

export const pt6_ns = tss({
  MEDIA:       tssMedia__1,
  padding_top: `8rem`,
});

export const pt7_ns = tss({
  MEDIA:       tssMedia__1,
  padding_top: `16rem`,
});

export const pv0_ns = tss({
  MEDIA:          tssMedia__1,
  padding_top:    `0`,
  padding_bottom: `0`,
});

export const pv1_ns = tss({
  MEDIA:          tssMedia__1,
  padding_top:    `.25rem`,
  padding_bottom: `.25rem`,
});

export const pv2_ns = tss({
  MEDIA:          tssMedia__1,
  padding_top:    `.5rem`,
  padding_bottom: `.5rem`,
});

export const pv3_ns = tss({
  MEDIA:          tssMedia__1,
  padding_top:    `1rem`,
  padding_bottom: `1rem`,
});

export const pv4_ns = tss({
  MEDIA:          tssMedia__1,
  padding_top:    `2rem`,
  padding_bottom: `2rem`,
});

export const pv5_ns = tss({
  MEDIA:          tssMedia__1,
  padding_top:    `4rem`,
  padding_bottom: `4rem`,
});

export const pv6_ns = tss({
  MEDIA:          tssMedia__1,
  padding_top:    `8rem`,
  padding_bottom: `8rem`,
});

export const pv7_ns = tss({
  MEDIA:          tssMedia__1,
  padding_top:    `16rem`,
  padding_bottom: `16rem`,
});

export const ph0_ns = tss({
  MEDIA:         tssMedia__1,
  padding_left:  `0`,
  padding_right: `0`,
});

export const ph1_ns = tss({
  MEDIA:         tssMedia__1,
  padding_left:  `.25rem`,
  padding_right: `.25rem`,
});

export const ph2_ns = tss({
  MEDIA:         tssMedia__1,
  padding_left:  `.5rem`,
  padding_right: `.5rem`,
});

export const ph3_ns = tss({
  MEDIA:         tssMedia__1,
  padding_left:  `1rem`,
  padding_right: `1rem`,
});

export const ph4_ns = tss({
  MEDIA:         tssMedia__1,
  padding_left:  `2rem`,
  padding_right: `2rem`,
});

export const ph5_ns = tss({
  MEDIA:         tssMedia__1,
  padding_left:  `4rem`,
  padding_right: `4rem`,
});

export const ph6_ns = tss({
  MEDIA:         tssMedia__1,
  padding_left:  `8rem`,
  padding_right: `8rem`,
});

export const ph7_ns = tss({
  MEDIA:         tssMedia__1,
  padding_left:  `16rem`,
  padding_right: `16rem`,
});

export const ma0_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `0`,
});

export const ma1_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `.25rem`,
});

export const ma2_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `.5rem`,
});

export const ma3_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `1rem`,
});

export const ma4_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `2rem`,
});

export const ma5_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `4rem`,
});

export const ma6_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `8rem`,
});

export const ma7_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `16rem`,
});

export const ml0_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `0`,
});

export const ml1_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `.25rem`,
});

export const ml2_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `.5rem`,
});

export const ml3_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `1rem`,
});

export const ml4_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `2rem`,
});

export const ml5_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `4rem`,
});

export const ml6_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `8rem`,
});

export const ml7_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `16rem`,
});

export const mr0_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `0`,
});

export const mr1_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `.25rem`,
});

export const mr2_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `.5rem`,
});

export const mr3_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `1rem`,
});

export const mr4_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `2rem`,
});

export const mr5_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `4rem`,
});

export const mr6_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `8rem`,
});

export const mr7_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `16rem`,
});

export const mb0_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `0`,
});

export const mb1_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `.25rem`,
});

export const mb2_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `.5rem`,
});

export const mb3_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `1rem`,
});

export const mb4_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `2rem`,
});

export const mb5_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `4rem`,
});

export const mb6_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `8rem`,
});

export const mb7_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `16rem`,
});

export const mt0_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `0`,
});

export const mt1_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `.25rem`,
});

export const mt2_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `.5rem`,
});

export const mt3_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `1rem`,
});

export const mt4_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `2rem`,
});

export const mt5_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `4rem`,
});

export const mt6_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `8rem`,
});

export const mt7_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `16rem`,
});

export const mv0_ns = tss({
  MEDIA:         tssMedia__1,
  margin_top:    `0`,
  margin_bottom: `0`,
});

export const mv1_ns = tss({
  MEDIA:         tssMedia__1,
  margin_top:    `.25rem`,
  margin_bottom: `.25rem`,
});

export const mv2_ns = tss({
  MEDIA:         tssMedia__1,
  margin_top:    `.5rem`,
  margin_bottom: `.5rem`,
});

export const mv3_ns = tss({
  MEDIA:         tssMedia__1,
  margin_top:    `1rem`,
  margin_bottom: `1rem`,
});

export const mv4_ns = tss({
  MEDIA:         tssMedia__1,
  margin_top:    `2rem`,
  margin_bottom: `2rem`,
});

export const mv5_ns = tss({
  MEDIA:         tssMedia__1,
  margin_top:    `4rem`,
  margin_bottom: `4rem`,
});

export const mv6_ns = tss({
  MEDIA:         tssMedia__1,
  margin_top:    `8rem`,
  margin_bottom: `8rem`,
});

export const mv7_ns = tss({
  MEDIA:         tssMedia__1,
  margin_top:    `16rem`,
  margin_bottom: `16rem`,
});

export const mh0_ns = tss({
  MEDIA:        tssMedia__1,
  margin_left:  `0`,
  margin_right: `0`,
});

export const mh1_ns = tss({
  MEDIA:        tssMedia__1,
  margin_left:  `.25rem`,
  margin_right: `.25rem`,
});

export const mh2_ns = tss({
  MEDIA:        tssMedia__1,
  margin_left:  `.5rem`,
  margin_right: `.5rem`,
});

export const mh3_ns = tss({
  MEDIA:        tssMedia__1,
  margin_left:  `1rem`,
  margin_right: `1rem`,
});

export const mh4_ns = tss({
  MEDIA:        tssMedia__1,
  margin_left:  `2rem`,
  margin_right: `2rem`,
});

export const mh5_ns = tss({
  MEDIA:        tssMedia__1,
  margin_left:  `4rem`,
  margin_right: `4rem`,
});

export const mh6_ns = tss({
  MEDIA:        tssMedia__1,
  margin_left:  `8rem`,
  margin_right: `8rem`,
});

export const mh7_ns = tss({
  MEDIA:        tssMedia__1,
  margin_left:  `16rem`,
  margin_right: `16rem`,
});

export const na1_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `-0.25rem`,
});

export const na2_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `-0.5rem`,
});

export const na3_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `-1rem`,
});

export const na4_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `-2rem`,
});

export const na5_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `-4rem`,
});

export const na6_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `-8rem`,
});

export const na7_ns = tss({
  MEDIA:  tssMedia__1,
  margin: `-16rem`,
});

export const nl1_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `-0.25rem`,
});

export const nl2_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `-0.5rem`,
});

export const nl3_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `-1rem`,
});

export const nl4_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `-2rem`,
});

export const nl5_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `-4rem`,
});

export const nl6_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `-8rem`,
});

export const nl7_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `-16rem`,
});

export const nr1_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `-0.25rem`,
});

export const nr2_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `-0.5rem`,
});

export const nr3_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `-1rem`,
});

export const nr4_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `-2rem`,
});

export const nr5_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `-4rem`,
});

export const nr6_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `-8rem`,
});

export const nr7_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `-16rem`,
});

export const nb1_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `-0.25rem`,
});

export const nb2_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `-0.5rem`,
});

export const nb3_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `-1rem`,
});

export const nb4_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `-2rem`,
});

export const nb5_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `-4rem`,
});

export const nb6_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `-8rem`,
});

export const nb7_ns = tss({
  MEDIA:         tssMedia__1,
  margin_bottom: `-16rem`,
});

export const nt1_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `-0.25rem`,
});

export const nt2_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `-0.5rem`,
});

export const nt3_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `-1rem`,
});

export const nt4_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `-2rem`,
});

export const nt5_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `-4rem`,
});

export const nt6_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `-8rem`,
});

export const nt7_ns = tss({
  MEDIA:      tssMedia__1,
  margin_top: `-16rem`,
});

export const strike_ns = tss({
  MEDIA:           tssMedia__1,
  text_decoration: `line-through`,
});

export const underline_ns = tss({
  MEDIA:           tssMedia__1,
  text_decoration: `underline`,
});

export const no_underline_ns = tss({
  MEDIA:           tssMedia__1,
  text_decoration: `none`,
});

export const tl_ns = tss({
  MEDIA:      tssMedia__1,
  text_align: `left`,
});

export const tr_ns = tss({
  MEDIA:      tssMedia__1,
  text_align: `right`,
});

export const tc_ns = tss({
  MEDIA:      tssMedia__1,
  text_align: `center`,
});

export const tj_ns = tss({
  MEDIA:      tssMedia__1,
  text_align: `justify`,
});

export const ttc_ns = tss({
  MEDIA:          tssMedia__1,
  text_transform: `capitalize`,
});

export const ttl_ns = tss({
  MEDIA:          tssMedia__1,
  text_transform: `lowercase`,
});

export const ttu_ns = tss({
  MEDIA:          tssMedia__1,
  text_transform: `uppercase`,
});

export const ttn_ns = tss({
  MEDIA:          tssMedia__1,
  text_transform: `none`,
});

export const f_6_ns = tss(join({  MEDIA: tssMedia__1,}, tssCommon__5));

export const f_headline_ns = tss(join({  MEDIA: tssMedia__1,}, tssCommon__5));

export const f_5_ns = tss(join({  MEDIA: tssMedia__1,}, tssCommon__6));

export const f_subheadline_ns = tss(join({  MEDIA: tssMedia__1,}, tssCommon__6));

export const f1_ns = tss({
  MEDIA:     tssMedia__1,
  font_size: `3rem`,
});

export const f2_ns = tss({
  MEDIA:     tssMedia__1,
  font_size: `2.25rem`,
});

export const f3_ns = tss({
  MEDIA:     tssMedia__1,
  font_size: `1.5rem`,
});

export const f4_ns = tss({
  MEDIA:     tssMedia__1,
  font_size: `1.25rem`,
});

export const f5_ns = tss({
  MEDIA:     tssMedia__1,
  font_size: `1rem`,
});

export const f6_ns = tss({
  MEDIA:     tssMedia__1,
  font_size: `.875rem`,
});

export const f7_ns = tss({
  MEDIA:     tssMedia__1,
  font_size: `.75rem`,
});

export const measure_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `30em`,
});

export const measure_wide_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `34em`,
});

export const measure_narrow_ns = tss({
  MEDIA:     tssMedia__1,
  max_width: `20em`,
});

export const indent_ns = tss({
  MEDIA:         tssMedia__1,
  text_indent:   `1em`,
  margin_top:    `0`,
  margin_bottom: `0`,
});

export const small_caps_ns = tss({
  MEDIA:        tssMedia__1,
  font_variant: `small-caps`,
});

export const truncate_ns = tss({
  MEDIA:         tssMedia__1,
  white_space:   `nowrap`,
  overflow:      `hidden`,
  text_overflow: `ellipsis`,
});

export const center_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `auto`,
  margin_left:  `auto`,
});

export const mr_auto_ns = tss({
  MEDIA:        tssMedia__1,
  margin_right: `auto`,
});

export const ml_auto_ns = tss({
  MEDIA:       tssMedia__1,
  margin_left: `auto`,
});

export const clip_ns = tss({
  MEDIA:     tssMedia__1,
  position:  `fixed !important`,
  _position: `absolute !important`,
  clip:      [`rect( 1px 1px 1px 1px )`,`rect( 1px, 1px, 1px, 1px )`],
});

export const ws_normal_ns = tss({
  MEDIA:       tssMedia__1,
  white_space: `normal`,
});

export const nowrap_ns = tss({
  MEDIA:       tssMedia__1,
  white_space: `nowrap`,
});

export const pre_ns = tss({
  MEDIA:       tssMedia__1,
  white_space: `pre`,
});

export const v_base_ns = tss({
  MEDIA:          tssMedia__1,
  vertical_align: `baseline`,
});

export const v_mid_ns = tss({
  MEDIA:          tssMedia__1,
  vertical_align: `middle`,
});

export const v_top_ns = tss({
  MEDIA:          tssMedia__1,
  vertical_align: `top`,
});

export const v_btm_ns = tss({
  MEDIA:          tssMedia__1,
  vertical_align: `bottom`,
});

export const aspect_ratio_m = tss({
  MEDIA:    tssMedia__2,
  height:   `0`,
  position: `relative`,
});

export const aspect_ratio__16x9_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `56.25%`,
});

export const aspect_ratio__9x16_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `177.77%`,
});

export const aspect_ratio__4x3_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `75%`,
});

export const aspect_ratio__3x4_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `133.33%`,
});

export const aspect_ratio__6x4_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `66.6%`,
});

export const aspect_ratio__4x6_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `150%`,
});

export const aspect_ratio__8x5_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `62.5%`,
});

export const aspect_ratio__5x8_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `160%`,
});

export const aspect_ratio__7x5_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `71.42%`,
});

export const aspect_ratio__5x7_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `140%`,
});

export const aspect_ratio__1x1_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `100%`,
});

export const aspect_ratio__object_m = tss({
  MEDIA:    tssMedia__2,
  position: `absolute`,
  top:      `0`,
  right:    `0`,
  bottom:   `0`,
  left:     `0`,
  width:    `100%`,
  height:   `100%`,
  z_index:  `100`,
});

export const cover_m = tss({
  MEDIA:           tssMedia__2,
  background_size: `cover !important`,
});

export const contain_m = tss({
  MEDIA:           tssMedia__2,
  background_size: `contain !important`,
});

export const bg_center_m = tss({
  MEDIA:               tssMedia__2,
  background_repeat:   `no-repeat`,
  background_position: `center center`,
});

export const bg_top_m = tss({
  MEDIA:               tssMedia__2,
  background_repeat:   `no-repeat`,
  background_position: `top center`,
});

export const bg_right_m = tss({
  MEDIA:               tssMedia__2,
  background_repeat:   `no-repeat`,
  background_position: `center right`,
});

export const bg_bottom_m = tss({
  MEDIA:               tssMedia__2,
  background_repeat:   `no-repeat`,
  background_position: `bottom center`,
});

export const bg_left_m = tss({
  MEDIA:               tssMedia__2,
  background_repeat:   `no-repeat`,
  background_position: `center left`,
});

export const outline_m = tss({
  MEDIA:   tssMedia__2,
  outline: `1px solid`,
});

export const outline_transparent_m = tss({
  MEDIA:   tssMedia__2,
  outline: `1px solid transparent`,
});

export const outline_0_m = tss({
  MEDIA:   tssMedia__2,
  outline: `0`,
});

export const ba_m = tss({
  MEDIA:        tssMedia__2,
  border_style: `solid`,
  border_width: `1px`,
});

export const bt_m = tss({
  MEDIA:            tssMedia__2,
  border_top_style: `solid`,
  border_top_width: `1px`,
});

export const br_m = tss({
  MEDIA:              tssMedia__2,
  border_right_style: `solid`,
  border_right_width: `1px`,
});

export const bb_m = tss({
  MEDIA:               tssMedia__2,
  border_bottom_style: `solid`,
  border_bottom_width: `1px`,
});

export const bl_m = tss({
  MEDIA:             tssMedia__2,
  border_left_style: `solid`,
  border_left_width: `1px`,
});

export const bn_m = tss({
  MEDIA:        tssMedia__2,
  border_style: `none`,
  border_width: `0`,
});

export const br0_m = tss({
  MEDIA:         tssMedia__2,
  border_radius: `0`,
});

export const br1_m = tss({
  MEDIA:         tssMedia__2,
  border_radius: `.125rem`,
});

export const br2_m = tss({
  MEDIA:         tssMedia__2,
  border_radius: `.25rem`,
});

export const br3_m = tss({
  MEDIA:         tssMedia__2,
  border_radius: `.5rem`,
});

export const br4_m = tss({
  MEDIA:         tssMedia__2,
  border_radius: `1rem`,
});

export const br_100_m = tss({
  MEDIA:         tssMedia__2,
  border_radius: `100%`,
});

export const br_pill_m = tss({
  MEDIA:         tssMedia__2,
  border_radius: `9999px`,
});

export const br__bottom_m = tss({
  MEDIA:                   tssMedia__2,
  border_top_left_radius:  `0`,
  border_top_right_radius: `0`,
});

export const br__top_m = tss({
  MEDIA:                    tssMedia__2,
  border_bottom_left_radius: `0`,
  border_bottom_right_radius: `0`,
});

export const br__right_m = tss({
  MEDIA:                    tssMedia__2,
  border_top_left_radius:   `0`,
  border_bottom_left_radius: `0`,
});

export const br__left_m = tss({
  MEDIA:                    tssMedia__2,
  border_top_right_radius:  `0`,
  border_bottom_right_radius: `0`,
});

export const b__dotted_m = tss({
  MEDIA:        tssMedia__2,
  border_style: `dotted`,
});

export const b__dashed_m = tss({
  MEDIA:        tssMedia__2,
  border_style: `dashed`,
});

export const b__solid_m = tss({
  MEDIA:        tssMedia__2,
  border_style: `solid`,
});

export const b__none_m = tss({
  MEDIA:        tssMedia__2,
  border_style: `none`,
});

export const bw0_m = tss({
  MEDIA:        tssMedia__2,
  border_width: `0`,
});

export const bw1_m = tss({
  MEDIA:        tssMedia__2,
  border_width: `.125rem`,
});

export const bw2_m = tss({
  MEDIA:        tssMedia__2,
  border_width: `.25rem`,
});

export const bw3_m = tss({
  MEDIA:        tssMedia__2,
  border_width: `.5rem`,
});

export const bw4_m = tss({
  MEDIA:        tssMedia__2,
  border_width: `1rem`,
});

export const bw5_m = tss({
  MEDIA:        tssMedia__2,
  border_width: `2rem`,
});

export const bt_0_m = tss({
  MEDIA:            tssMedia__2,
  border_top_width: `0`,
});

export const br_0_m = tss({
  MEDIA:              tssMedia__2,
  border_right_width: `0`,
});

export const bb_0_m = tss({
  MEDIA:               tssMedia__2,
  border_bottom_width: `0`,
});

export const bl_0_m = tss({
  MEDIA:             tssMedia__2,
  border_left_width: `0`,
});

export const shadow_1_m = tss({
  MEDIA:      tssMedia__2,
  box_shadow: `0 0 4px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_2_m = tss({
  MEDIA:      tssMedia__2,
  box_shadow: `0 0 8px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_3_m = tss({
  MEDIA:      tssMedia__2,
  box_shadow: `2px 2px 4px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_4_m = tss({
  MEDIA:      tssMedia__2,
  box_shadow: `2px 2px 8px 0 rgba( 0, 0, 0, .2 )`,
});

export const shadow_5_m = tss({
  MEDIA:      tssMedia__2,
  box_shadow: `4px 4px 8px 0 rgba( 0, 0, 0, .2 )`,
});

export const top_0_m = tss({
  MEDIA: tssMedia__2,
  top:   `0`,
});

export const left_0_m = tss({
  MEDIA: tssMedia__2,
  left:  `0`,
});

export const right_0_m = tss({
  MEDIA: tssMedia__2,
  right: `0`,
});

export const bottom_0_m = tss({
  MEDIA:  tssMedia__2,
  bottom: `0`,
});

export const top_1_m = tss({
  MEDIA: tssMedia__2,
  top:   `1rem`,
});

export const left_1_m = tss({
  MEDIA: tssMedia__2,
  left:  `1rem`,
});

export const right_1_m = tss({
  MEDIA: tssMedia__2,
  right: `1rem`,
});

export const bottom_1_m = tss({
  MEDIA:  tssMedia__2,
  bottom: `1rem`,
});

export const top_2_m = tss({
  MEDIA: tssMedia__2,
  top:   `2rem`,
});

export const left_2_m = tss({
  MEDIA: tssMedia__2,
  left:  `2rem`,
});

export const right_2_m = tss({
  MEDIA: tssMedia__2,
  right: `2rem`,
});

export const bottom_2_m = tss({
  MEDIA:  tssMedia__2,
  bottom: `2rem`,
});

export const top__1_m = tss({
  MEDIA: tssMedia__2,
  top:   `-1rem`,
});

export const right__1_m = tss({
  MEDIA: tssMedia__2,
  right: `-1rem`,
});

export const bottom__1_m = tss({
  MEDIA:  tssMedia__2,
  bottom: `-1rem`,
});

export const left__1_m = tss({
  MEDIA: tssMedia__2,
  left:  `-1rem`,
});

export const top__2_m = tss({
  MEDIA: tssMedia__2,
  top:   `-2rem`,
});

export const right__2_m = tss({
  MEDIA: tssMedia__2,
  right: `-2rem`,
});

export const bottom__2_m = tss({
  MEDIA:  tssMedia__2,
  bottom: `-2rem`,
});

export const left__2_m = tss({
  MEDIA: tssMedia__2,
  left:  `-2rem`,
});

export const absolute__fill_m = tss({
  MEDIA:  tssMedia__2,
  top:    `0`,
  right:  `0`,
  bottom: `0`,
  left:   `0`,
});

export const cl_m = tss({
  MEDIA: tssMedia__2,
  clear: `left`,
});

export const cr_m = tss({
  MEDIA: tssMedia__2,
  clear: `right`,
});

export const cb_m = tss({
  MEDIA: tssMedia__2,
  clear: `both`,
});

export const cn_m = tss({
  MEDIA: tssMedia__2,
  clear: `none`,
});

export const dn_m = tss({
  MEDIA:   tssMedia__2,
  display: `none`,
});

export const di_m = tss({
  MEDIA:   tssMedia__2,
  display: `inline`,
});

export const db_m = tss({
  MEDIA:   tssMedia__2,
  display: `block`,
});

export const dib_m = tss({
  MEDIA:   tssMedia__2,
  display: `inline-block`,
});

export const dit_m = tss({
  MEDIA:   tssMedia__2,
  display: `inline-table`,
});

export const dt_m = tss({
  MEDIA:   tssMedia__2,
  display: `table`,
});

export const dtc_m = tss({
  MEDIA:   tssMedia__2,
  display: `table-cell`,
});

export const dt_row_m = tss({
  MEDIA:   tssMedia__2,
  display: `table-row`,
});

export const dt_row_group_m = tss({
  MEDIA:   tssMedia__2,
  display: `table-row-group`,
});

export const dt_column_m = tss({
  MEDIA:   tssMedia__2,
  display: `table-column`,
});

export const dt_column_group_m = tss({
  MEDIA:   tssMedia__2,
  display: `table-column-group`,
});

export const dt__fixed_m = tss({
  MEDIA:        tssMedia__2,
  table_layout: `fixed`,
  width:        `100%`,
});

export const flex_m = tss({
  MEDIA:   tssMedia__2,
  display: `flex`,
});

export const inline_flex_m = tss({
  MEDIA:   tssMedia__2,
  display: `inline-flex`,
});

export const flex_auto_m = tss({
  MEDIA:      tssMedia__2,
  flex:       `1 1 auto`,
  min_width:  `0`,
  min_height: `0`,
});

export const flex_none_m = tss({
  MEDIA: tssMedia__2,
  flex:  `none`,
});

export const flex_column_m = tss({
  MEDIA:          tssMedia__2,
  flex_direction: `column`,
});

export const flex_row_m = tss({
  MEDIA:          tssMedia__2,
  flex_direction: `row`,
});

export const flex_wrap_m = tss({
  MEDIA:     tssMedia__2,
  flex_wrap: `wrap`,
});

export const flex_nowrap_m = tss({
  MEDIA:     tssMedia__2,
  flex_wrap: `nowrap`,
});

export const flex_wrap_reverse_m = tss({
  MEDIA:     tssMedia__2,
  flex_wrap: `wrap-reverse`,
});

export const flex_column_reverse_m = tss({
  MEDIA:          tssMedia__2,
  flex_direction: `column-reverse`,
});

export const flex_row_reverse_m = tss({
  MEDIA:          tssMedia__2,
  flex_direction: `row-reverse`,
});

export const items_start_m = tss({
  MEDIA:       tssMedia__2,
  align_items: `flex-start`,
});

export const items_end_m = tss({
  MEDIA:       tssMedia__2,
  align_items: `flex-end`,
});

export const items_center_m = tss({
  MEDIA:       tssMedia__2,
  align_items: `center`,
});

export const items_baseline_m = tss({
  MEDIA:       tssMedia__2,
  align_items: `baseline`,
});

export const items_stretch_m = tss({
  MEDIA:       tssMedia__2,
  align_items: `stretch`,
});

export const self_start_m = tss({
  MEDIA:      tssMedia__2,
  align_self: `flex-start`,
});

export const self_end_m = tss({
  MEDIA:      tssMedia__2,
  align_self: `flex-end`,
});

export const self_center_m = tss({
  MEDIA:      tssMedia__2,
  align_self: `center`,
});

export const self_baseline_m = tss({
  MEDIA:      tssMedia__2,
  align_self: `baseline`,
});

export const self_stretch_m = tss({
  MEDIA:      tssMedia__2,
  align_self: `stretch`,
});

export const justify_start_m = tss({
  MEDIA:           tssMedia__2,
  justify_content: `flex-start`,
});

export const justify_end_m = tss({
  MEDIA:           tssMedia__2,
  justify_content: `flex-end`,
});

export const justify_center_m = tss({
  MEDIA:           tssMedia__2,
  justify_content: `center`,
});

export const justify_between_m = tss({
  MEDIA:           tssMedia__2,
  justify_content: `space-between`,
});

export const justify_around_m = tss({
  MEDIA:           tssMedia__2,
  justify_content: `space-around`,
});

export const content_start_m = tss({
  MEDIA:         tssMedia__2,
  align_content: `flex-start`,
});

export const content_end_m = tss({
  MEDIA:         tssMedia__2,
  align_content: `flex-end`,
});

export const content_center_m = tss({
  MEDIA:         tssMedia__2,
  align_content: `center`,
});

export const content_between_m = tss({
  MEDIA:         tssMedia__2,
  align_content: `space-between`,
});

export const content_around_m = tss({
  MEDIA:         tssMedia__2,
  align_content: `space-around`,
});

export const content_stretch_m = tss({
  MEDIA:         tssMedia__2,
  align_content: `stretch`,
});

export const order_0_m = tss({
  MEDIA: tssMedia__2,
  order: `0`,
});

export const order_1_m = tss({
  MEDIA: tssMedia__2,
  order: `1`,
});

export const order_2_m = tss({
  MEDIA: tssMedia__2,
  order: `2`,
});

export const order_3_m = tss({
  MEDIA: tssMedia__2,
  order: `3`,
});

export const order_4_m = tss({
  MEDIA: tssMedia__2,
  order: `4`,
});

export const order_5_m = tss({
  MEDIA: tssMedia__2,
  order: `5`,
});

export const order_6_m = tss({
  MEDIA: tssMedia__2,
  order: `6`,
});

export const order_7_m = tss({
  MEDIA: tssMedia__2,
  order: `7`,
});

export const order_8_m = tss({
  MEDIA: tssMedia__2,
  order: `8`,
});

export const order_last_m = tss({
  MEDIA: tssMedia__2,
  order: `99999`,
});

export const flex_grow_0_m = tss({
  MEDIA:     tssMedia__2,
  flex_grow: `0`,
});

export const flex_grow_1_m = tss({
  MEDIA:     tssMedia__2,
  flex_grow: `1`,
});

export const flex_shrink_0_m = tss({
  MEDIA:       tssMedia__2,
  flex_shrink: `0`,
});

export const flex_shrink_1_m = tss({
  MEDIA:       tssMedia__2,
  flex_shrink: `1`,
});

export const fl_m = tss({
  MEDIA:    tssMedia__2,
  float:    `left`,
  _display: `inline`,
});

export const fr_m = tss({
  MEDIA:    tssMedia__2,
  float:    `right`,
  _display: `inline`,
});

export const fn_m = tss({
  MEDIA: tssMedia__2,
  float: `none`,
});

export const i_m = tss({
  MEDIA:      tssMedia__2,
  font_style: `italic`,
});

export const fs_normal_m = tss({
  MEDIA:      tssMedia__2,
  font_style: `normal`,
});

export const normal_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `normal`,
});

export const b_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `bold`,
});

export const fw1_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `100`,
});

export const fw2_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `200`,
});

export const fw3_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `300`,
});

export const fw4_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `400`,
});

export const fw5_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `500`,
});

export const fw6_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `600`,
});

export const fw7_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `700`,
});

export const fw8_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `800`,
});

export const fw9_m = tss({
  MEDIA:       tssMedia__2,
  font_weight: `900`,
});

export const h1_m = tss({
  MEDIA:  tssMedia__2,
  height: `1rem`,
});

export const h2_m = tss({
  MEDIA:  tssMedia__2,
  height: `2rem`,
});

export const h3_m = tss({
  MEDIA:  tssMedia__2,
  height: `4rem`,
});

export const h4_m = tss({
  MEDIA:  tssMedia__2,
  height: `8rem`,
});

export const h5_m = tss({
  MEDIA:  tssMedia__2,
  height: `16rem`,
});

export const h_25_m = tss({
  MEDIA:  tssMedia__2,
  height: `25%`,
});

export const h_50_m = tss({
  MEDIA:  tssMedia__2,
  height: `50%`,
});

export const h_75_m = tss({
  MEDIA:  tssMedia__2,
  height: `75%`,
});

export const h_100_m = tss({
  MEDIA:  tssMedia__2,
  height: `100%`,
});

export const min_h_100_m = tss({
  MEDIA:      tssMedia__2,
  min_height: `100%`,
});

export const vh_25_m = tss({
  MEDIA:  tssMedia__2,
  height: `25vh`,
});

export const vh_50_m = tss({
  MEDIA:  tssMedia__2,
  height: `50vh`,
});

export const vh_75_m = tss({
  MEDIA:  tssMedia__2,
  height: `75vh`,
});

export const vh_100_m = tss({
  MEDIA:  tssMedia__2,
  height: `100vh`,
});

export const min_vh_100_m = tss({
  MEDIA:      tssMedia__2,
  min_height: `100vh`,
});

export const h_auto_m = tss({
  MEDIA:  tssMedia__2,
  height: `auto`,
});

export const h_inherit_m = tss({
  MEDIA:  tssMedia__2,
  height: `inherit`,
});

export const tracked_m = tss({
  MEDIA:          tssMedia__2,
  letter_spacing: `.1em`,
});

export const tracked_tight_m = tss({
  MEDIA:          tssMedia__2,
  letter_spacing: `-.05em`,
});

export const tracked_mega_m = tss({
  MEDIA:          tssMedia__2,
  letter_spacing: `.25em`,
});

export const lh_solid_m = tss({
  MEDIA:       tssMedia__2,
  line_height: `1`,
});

export const lh_title_m = tss({
  MEDIA:       tssMedia__2,
  line_height: `1.25`,
});

export const lh_copy_m = tss({
  MEDIA:       tssMedia__2,
  line_height: `1.5`,
});

export const mw_100_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `100%`,
});

export const mw1_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `1rem`,
});

export const mw2_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `2rem`,
});

export const mw3_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `4rem`,
});

export const mw4_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `8rem`,
});

export const mw5_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `16rem`,
});

export const mw6_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `32rem`,
});

export const mw7_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `48rem`,
});

export const mw8_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `64rem`,
});

export const mw9_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `96rem`,
});

export const mw_none_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `none`,
});

export const w1_m = tss({
  MEDIA: tssMedia__2,
  width: `1rem`,
});

export const w2_m = tss({
  MEDIA: tssMedia__2,
  width: `2rem`,
});

export const w3_m = tss({
  MEDIA: tssMedia__2,
  width: `4rem`,
});

export const w4_m = tss({
  MEDIA: tssMedia__2,
  width: `8rem`,
});

export const w5_m = tss({
  MEDIA: tssMedia__2,
  width: `16rem`,
});

export const w_10_m = tss({
  MEDIA: tssMedia__2,
  width: `10%`,
});

export const w_20_m = tss({
  MEDIA: tssMedia__2,
  width: `20%`,
});

export const w_25_m = tss({
  MEDIA: tssMedia__2,
  width: `25%`,
});

export const w_30_m = tss({
  MEDIA: tssMedia__2,
  width: `30%`,
});

export const w_33_m = tss({
  MEDIA: tssMedia__2,
  width: `33%`,
});

export const w_34_m = tss({
  MEDIA: tssMedia__2,
  width: `34%`,
});

export const w_40_m = tss({
  MEDIA: tssMedia__2,
  width: `40%`,
});

export const w_50_m = tss({
  MEDIA: tssMedia__2,
  width: `50%`,
});

export const w_60_m = tss({
  MEDIA: tssMedia__2,
  width: `60%`,
});

export const w_70_m = tss({
  MEDIA: tssMedia__2,
  width: `70%`,
});

export const w_75_m = tss({
  MEDIA: tssMedia__2,
  width: `75%`,
});

export const w_80_m = tss({
  MEDIA: tssMedia__2,
  width: `80%`,
});

export const w_90_m = tss({
  MEDIA: tssMedia__2,
  width: `90%`,
});

export const w_100_m = tss({
  MEDIA: tssMedia__2,
  width: `100%`,
});

export const w_third_m = tss({
  MEDIA: tssMedia__2,
  width: `33.33333%`,
});

export const w_two_thirds_m = tss({
  MEDIA: tssMedia__2,
  width: `66.66667%`,
});

export const w_auto_m = tss({
  MEDIA: tssMedia__2,
  width: `auto`,
});

export const overflow_visible_m = tss({
  MEDIA:    tssMedia__2,
  overflow: `visible`,
});

export const overflow_hidden_m = tss({
  MEDIA:    tssMedia__2,
  overflow: `hidden`,
});

export const overflow_scroll_m = tss({
  MEDIA:    tssMedia__2,
  overflow: `scroll`,
});

export const overflow_auto_m = tss({
  MEDIA:    tssMedia__2,
  overflow: `auto`,
});

export const overflow_x_visible_m = tss({
  MEDIA:      tssMedia__2,
  overflow_x: `visible`,
});

export const overflow_x_hidden_m = tss({
  MEDIA:      tssMedia__2,
  overflow_x: `hidden`,
});

export const overflow_x_scroll_m = tss({
  MEDIA:      tssMedia__2,
  overflow_x: `scroll`,
});

export const overflow_x_auto_m = tss({
  MEDIA:      tssMedia__2,
  overflow_x: `auto`,
});

export const overflow_y_visible_m = tss({
  MEDIA:      tssMedia__2,
  overflow_y: `visible`,
});

export const overflow_y_hidden_m = tss({
  MEDIA:      tssMedia__2,
  overflow_y: `hidden`,
});

export const overflow_y_scroll_m = tss({
  MEDIA:      tssMedia__2,
  overflow_y: `scroll`,
});

export const overflow_y_auto_m = tss({
  MEDIA:      tssMedia__2,
  overflow_y: `auto`,
});

export const static_m = tss({
  MEDIA:    tssMedia__2,
  position: `static`,
});

export const relative_m = tss({
  MEDIA:    tssMedia__2,
  position: `relative`,
});

export const absolute_m = tss({
  MEDIA:    tssMedia__2,
  position: `absolute`,
});

export const fixed_m = tss({
  MEDIA:    tssMedia__2,
  position: `fixed`,
});

export const rotate_45_m = tss({
  MEDIA:             tssMedia__2,
  _webkit_transform: `rotate( 45deg )`,
  transform:         `rotate( 45deg )`,
});

export const rotate_90_m = tss({
  MEDIA:             tssMedia__2,
  _webkit_transform: `rotate( 90deg )`,
  transform:         `rotate( 90deg )`,
});

export const rotate_135_m = tss({
  MEDIA:             tssMedia__2,
  _webkit_transform: `rotate( 135deg )`,
  transform:         `rotate( 135deg )`,
});

export const rotate_180_m = tss({
  MEDIA:             tssMedia__2,
  _webkit_transform: `rotate( 180deg )`,
  transform:         `rotate( 180deg )`,
});

export const rotate_225_m = tss({
  MEDIA:             tssMedia__2,
  _webkit_transform: `rotate( 225deg )`,
  transform:         `rotate( 225deg )`,
});

export const rotate_270_m = tss({
  MEDIA:             tssMedia__2,
  _webkit_transform: `rotate( 270deg )`,
  transform:         `rotate( 270deg )`,
});

export const rotate_315_m = tss({
  MEDIA:             tssMedia__2,
  _webkit_transform: `rotate( 315deg )`,
  transform:         `rotate( 315deg )`,
});

export const pa0_m = tss({
  MEDIA:   tssMedia__2,
  padding: `0`,
});

export const pa1_m = tss({
  MEDIA:   tssMedia__2,
  padding: `.25rem`,
});

export const pa2_m = tss({
  MEDIA:   tssMedia__2,
  padding: `.5rem`,
});

export const pa3_m = tss({
  MEDIA:   tssMedia__2,
  padding: `1rem`,
});

export const pa4_m = tss({
  MEDIA:   tssMedia__2,
  padding: `2rem`,
});

export const pa5_m = tss({
  MEDIA:   tssMedia__2,
  padding: `4rem`,
});

export const pa6_m = tss({
  MEDIA:   tssMedia__2,
  padding: `8rem`,
});

export const pa7_m = tss({
  MEDIA:   tssMedia__2,
  padding: `16rem`,
});

export const pl0_m = tss({
  MEDIA:        tssMedia__2,
  padding_left: `0`,
});

export const pl1_m = tss({
  MEDIA:        tssMedia__2,
  padding_left: `.25rem`,
});

export const pl2_m = tss({
  MEDIA:        tssMedia__2,
  padding_left: `.5rem`,
});

export const pl3_m = tss({
  MEDIA:        tssMedia__2,
  padding_left: `1rem`,
});

export const pl4_m = tss({
  MEDIA:        tssMedia__2,
  padding_left: `2rem`,
});

export const pl5_m = tss({
  MEDIA:        tssMedia__2,
  padding_left: `4rem`,
});

export const pl6_m = tss({
  MEDIA:        tssMedia__2,
  padding_left: `8rem`,
});

export const pl7_m = tss({
  MEDIA:        tssMedia__2,
  padding_left: `16rem`,
});

export const pr0_m = tss({
  MEDIA:         tssMedia__2,
  padding_right: `0`,
});

export const pr1_m = tss({
  MEDIA:         tssMedia__2,
  padding_right: `.25rem`,
});

export const pr2_m = tss({
  MEDIA:         tssMedia__2,
  padding_right: `.5rem`,
});

export const pr3_m = tss({
  MEDIA:         tssMedia__2,
  padding_right: `1rem`,
});

export const pr4_m = tss({
  MEDIA:         tssMedia__2,
  padding_right: `2rem`,
});

export const pr5_m = tss({
  MEDIA:         tssMedia__2,
  padding_right: `4rem`,
});

export const pr6_m = tss({
  MEDIA:         tssMedia__2,
  padding_right: `8rem`,
});

export const pr7_m = tss({
  MEDIA:         tssMedia__2,
  padding_right: `16rem`,
});

export const pb0_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `0`,
});

export const pb1_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `.25rem`,
});

export const pb2_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `.5rem`,
});

export const pb3_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `1rem`,
});

export const pb4_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `2rem`,
});

export const pb5_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `4rem`,
});

export const pb6_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `8rem`,
});

export const pb7_m = tss({
  MEDIA:          tssMedia__2,
  padding_bottom: `16rem`,
});

export const pt0_m = tss({
  MEDIA:       tssMedia__2,
  padding_top: `0`,
});

export const pt1_m = tss({
  MEDIA:       tssMedia__2,
  padding_top: `.25rem`,
});

export const pt2_m = tss({
  MEDIA:       tssMedia__2,
  padding_top: `.5rem`,
});

export const pt3_m = tss({
  MEDIA:       tssMedia__2,
  padding_top: `1rem`,
});

export const pt4_m = tss({
  MEDIA:       tssMedia__2,
  padding_top: `2rem`,
});

export const pt5_m = tss({
  MEDIA:       tssMedia__2,
  padding_top: `4rem`,
});

export const pt6_m = tss({
  MEDIA:       tssMedia__2,
  padding_top: `8rem`,
});

export const pt7_m = tss({
  MEDIA:       tssMedia__2,
  padding_top: `16rem`,
});

export const pv0_m = tss({
  MEDIA:          tssMedia__2,
  padding_top:    `0`,
  padding_bottom: `0`,
});

export const pv1_m = tss({
  MEDIA:          tssMedia__2,
  padding_top:    `.25rem`,
  padding_bottom: `.25rem`,
});

export const pv2_m = tss({
  MEDIA:          tssMedia__2,
  padding_top:    `.5rem`,
  padding_bottom: `.5rem`,
});

export const pv3_m = tss({
  MEDIA:          tssMedia__2,
  padding_top:    `1rem`,
  padding_bottom: `1rem`,
});

export const pv4_m = tss({
  MEDIA:          tssMedia__2,
  padding_top:    `2rem`,
  padding_bottom: `2rem`,
});

export const pv5_m = tss({
  MEDIA:          tssMedia__2,
  padding_top:    `4rem`,
  padding_bottom: `4rem`,
});

export const pv6_m = tss({
  MEDIA:          tssMedia__2,
  padding_top:    `8rem`,
  padding_bottom: `8rem`,
});

export const pv7_m = tss({
  MEDIA:          tssMedia__2,
  padding_top:    `16rem`,
  padding_bottom: `16rem`,
});

export const ph0_m = tss({
  MEDIA:         tssMedia__2,
  padding_left:  `0`,
  padding_right: `0`,
});

export const ph1_m = tss({
  MEDIA:         tssMedia__2,
  padding_left:  `.25rem`,
  padding_right: `.25rem`,
});

export const ph2_m = tss({
  MEDIA:         tssMedia__2,
  padding_left:  `.5rem`,
  padding_right: `.5rem`,
});

export const ph3_m = tss({
  MEDIA:         tssMedia__2,
  padding_left:  `1rem`,
  padding_right: `1rem`,
});

export const ph4_m = tss({
  MEDIA:         tssMedia__2,
  padding_left:  `2rem`,
  padding_right: `2rem`,
});

export const ph5_m = tss({
  MEDIA:         tssMedia__2,
  padding_left:  `4rem`,
  padding_right: `4rem`,
});

export const ph6_m = tss({
  MEDIA:         tssMedia__2,
  padding_left:  `8rem`,
  padding_right: `8rem`,
});

export const ph7_m = tss({
  MEDIA:         tssMedia__2,
  padding_left:  `16rem`,
  padding_right: `16rem`,
});

export const ma0_m = tss({
  MEDIA:  tssMedia__2,
  margin: `0`,
});

export const ma1_m = tss({
  MEDIA:  tssMedia__2,
  margin: `.25rem`,
});

export const ma2_m = tss({
  MEDIA:  tssMedia__2,
  margin: `.5rem`,
});

export const ma3_m = tss({
  MEDIA:  tssMedia__2,
  margin: `1rem`,
});

export const ma4_m = tss({
  MEDIA:  tssMedia__2,
  margin: `2rem`,
});

export const ma5_m = tss({
  MEDIA:  tssMedia__2,
  margin: `4rem`,
});

export const ma6_m = tss({
  MEDIA:  tssMedia__2,
  margin: `8rem`,
});

export const ma7_m = tss({
  MEDIA:  tssMedia__2,
  margin: `16rem`,
});

export const ml0_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `0`,
});

export const ml1_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `.25rem`,
});

export const ml2_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `.5rem`,
});

export const ml3_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `1rem`,
});

export const ml4_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `2rem`,
});

export const ml5_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `4rem`,
});

export const ml6_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `8rem`,
});

export const ml7_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `16rem`,
});

export const mr0_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `0`,
});

export const mr1_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `.25rem`,
});

export const mr2_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `.5rem`,
});

export const mr3_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `1rem`,
});

export const mr4_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `2rem`,
});

export const mr5_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `4rem`,
});

export const mr6_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `8rem`,
});

export const mr7_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `16rem`,
});

export const mb0_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `0`,
});

export const mb1_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `.25rem`,
});

export const mb2_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `.5rem`,
});

export const mb3_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `1rem`,
});

export const mb4_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `2rem`,
});

export const mb5_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `4rem`,
});

export const mb6_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `8rem`,
});

export const mb7_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `16rem`,
});

export const mt0_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `0`,
});

export const mt1_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `.25rem`,
});

export const mt2_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `.5rem`,
});

export const mt3_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `1rem`,
});

export const mt4_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `2rem`,
});

export const mt5_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `4rem`,
});

export const mt6_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `8rem`,
});

export const mt7_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `16rem`,
});

export const mv0_m = tss({
  MEDIA:         tssMedia__2,
  margin_top:    `0`,
  margin_bottom: `0`,
});

export const mv1_m = tss({
  MEDIA:         tssMedia__2,
  margin_top:    `.25rem`,
  margin_bottom: `.25rem`,
});

export const mv2_m = tss({
  MEDIA:         tssMedia__2,
  margin_top:    `.5rem`,
  margin_bottom: `.5rem`,
});

export const mv3_m = tss({
  MEDIA:         tssMedia__2,
  margin_top:    `1rem`,
  margin_bottom: `1rem`,
});

export const mv4_m = tss({
  MEDIA:         tssMedia__2,
  margin_top:    `2rem`,
  margin_bottom: `2rem`,
});

export const mv5_m = tss({
  MEDIA:         tssMedia__2,
  margin_top:    `4rem`,
  margin_bottom: `4rem`,
});

export const mv6_m = tss({
  MEDIA:         tssMedia__2,
  margin_top:    `8rem`,
  margin_bottom: `8rem`,
});

export const mv7_m = tss({
  MEDIA:         tssMedia__2,
  margin_top:    `16rem`,
  margin_bottom: `16rem`,
});

export const mh0_m = tss({
  MEDIA:        tssMedia__2,
  margin_left:  `0`,
  margin_right: `0`,
});

export const mh1_m = tss({
  MEDIA:        tssMedia__2,
  margin_left:  `.25rem`,
  margin_right: `.25rem`,
});

export const mh2_m = tss({
  MEDIA:        tssMedia__2,
  margin_left:  `.5rem`,
  margin_right: `.5rem`,
});

export const mh3_m = tss({
  MEDIA:        tssMedia__2,
  margin_left:  `1rem`,
  margin_right: `1rem`,
});

export const mh4_m = tss({
  MEDIA:        tssMedia__2,
  margin_left:  `2rem`,
  margin_right: `2rem`,
});

export const mh5_m = tss({
  MEDIA:        tssMedia__2,
  margin_left:  `4rem`,
  margin_right: `4rem`,
});

export const mh6_m = tss({
  MEDIA:        tssMedia__2,
  margin_left:  `8rem`,
  margin_right: `8rem`,
});

export const mh7_m = tss({
  MEDIA:        tssMedia__2,
  margin_left:  `16rem`,
  margin_right: `16rem`,
});

export const na1_m = tss({
  MEDIA:  tssMedia__2,
  margin: `-0.25rem`,
});

export const na2_m = tss({
  MEDIA:  tssMedia__2,
  margin: `-0.5rem`,
});

export const na3_m = tss({
  MEDIA:  tssMedia__2,
  margin: `-1rem`,
});

export const na4_m = tss({
  MEDIA:  tssMedia__2,
  margin: `-2rem`,
});

export const na5_m = tss({
  MEDIA:  tssMedia__2,
  margin: `-4rem`,
});

export const na6_m = tss({
  MEDIA:  tssMedia__2,
  margin: `-8rem`,
});

export const na7_m = tss({
  MEDIA:  tssMedia__2,
  margin: `-16rem`,
});

export const nl1_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `-0.25rem`,
});

export const nl2_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `-0.5rem`,
});

export const nl3_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `-1rem`,
});

export const nl4_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `-2rem`,
});

export const nl5_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `-4rem`,
});

export const nl6_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `-8rem`,
});

export const nl7_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `-16rem`,
});

export const nr1_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `-0.25rem`,
});

export const nr2_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `-0.5rem`,
});

export const nr3_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `-1rem`,
});

export const nr4_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `-2rem`,
});

export const nr5_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `-4rem`,
});

export const nr6_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `-8rem`,
});

export const nr7_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `-16rem`,
});

export const nb1_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `-0.25rem`,
});

export const nb2_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `-0.5rem`,
});

export const nb3_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `-1rem`,
});

export const nb4_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `-2rem`,
});

export const nb5_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `-4rem`,
});

export const nb6_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `-8rem`,
});

export const nb7_m = tss({
  MEDIA:         tssMedia__2,
  margin_bottom: `-16rem`,
});

export const nt1_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `-0.25rem`,
});

export const nt2_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `-0.5rem`,
});

export const nt3_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `-1rem`,
});

export const nt4_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `-2rem`,
});

export const nt5_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `-4rem`,
});

export const nt6_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `-8rem`,
});

export const nt7_m = tss({
  MEDIA:      tssMedia__2,
  margin_top: `-16rem`,
});

export const strike_m = tss({
  MEDIA:           tssMedia__2,
  text_decoration: `line-through`,
});

export const underline_m = tss({
  MEDIA:           tssMedia__2,
  text_decoration: `underline`,
});

export const no_underline_m = tss({
  MEDIA:           tssMedia__2,
  text_decoration: `none`,
});

export const tl_m = tss({
  MEDIA:      tssMedia__2,
  text_align: `left`,
});

export const tr_m = tss({
  MEDIA:      tssMedia__2,
  text_align: `right`,
});

export const tc_m = tss({
  MEDIA:      tssMedia__2,
  text_align: `center`,
});

export const tj_m = tss({
  MEDIA:      tssMedia__2,
  text_align: `justify`,
});

export const ttc_m = tss({
  MEDIA:          tssMedia__2,
  text_transform: `capitalize`,
});

export const ttl_m = tss({
  MEDIA:          tssMedia__2,
  text_transform: `lowercase`,
});

export const ttu_m = tss({
  MEDIA:          tssMedia__2,
  text_transform: `uppercase`,
});

export const ttn_m = tss({
  MEDIA:          tssMedia__2,
  text_transform: `none`,
});

export const f_6_m = tss(join({  MEDIA: tssMedia__2,}, tssCommon__7));

export const f_headline_m = tss(join({  MEDIA: tssMedia__2,}, tssCommon__7));

export const f_5_m = tss(join({  MEDIA: tssMedia__2,}, tssCommon__8));

export const f_subheadline_m = tss(join({  MEDIA: tssMedia__2,}, tssCommon__8));

export const f1_m = tss({
  MEDIA:     tssMedia__2,
  font_size: `3rem`,
});

export const f2_m = tss({
  MEDIA:     tssMedia__2,
  font_size: `2.25rem`,
});

export const f3_m = tss({
  MEDIA:     tssMedia__2,
  font_size: `1.5rem`,
});

export const f4_m = tss({
  MEDIA:     tssMedia__2,
  font_size: `1.25rem`,
});

export const f5_m = tss({
  MEDIA:     tssMedia__2,
  font_size: `1rem`,
});

export const f6_m = tss({
  MEDIA:     tssMedia__2,
  font_size: `.875rem`,
});

export const f7_m = tss({
  MEDIA:     tssMedia__2,
  font_size: `.75rem`,
});

export const measure_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `30em`,
});

export const measure_wide_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `34em`,
});

export const measure_narrow_m = tss({
  MEDIA:     tssMedia__2,
  max_width: `20em`,
});

export const indent_m = tss({
  MEDIA:         tssMedia__2,
  text_indent:   `1em`,
  margin_top:    `0`,
  margin_bottom: `0`,
});

export const small_caps_m = tss({
  MEDIA:        tssMedia__2,
  font_variant: `small-caps`,
});

export const truncate_m = tss({
  MEDIA:         tssMedia__2,
  white_space:   `nowrap`,
  overflow:      `hidden`,
  text_overflow: `ellipsis`,
});

export const center_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `auto`,
  margin_left:  `auto`,
});

export const mr_auto_m = tss({
  MEDIA:        tssMedia__2,
  margin_right: `auto`,
});

export const ml_auto_m = tss({
  MEDIA:       tssMedia__2,
  margin_left: `auto`,
});

export const clip_m = tss({
  MEDIA:     tssMedia__2,
  position:  `fixed !important`,
  _position: `absolute !important`,
  clip:      [`rect( 1px 1px 1px 1px )`,`rect( 1px, 1px, 1px, 1px )`],
});

export const ws_normal_m = tss({
  MEDIA:       tssMedia__2,
  white_space: `normal`,
});

export const nowrap_m = tss({
  MEDIA:       tssMedia__2,
  white_space: `nowrap`,
});

export const pre_m = tss({
  MEDIA:       tssMedia__2,
  white_space: `pre`,
});

export const v_base_m = tss({
  MEDIA:          tssMedia__2,
  vertical_align: `baseline`,
});

export const v_mid_m = tss({
  MEDIA:          tssMedia__2,
  vertical_align: `middle`,
});

export const v_top_m = tss({
  MEDIA:          tssMedia__2,
  vertical_align: `top`,
});

export const v_btm_m = tss({
  MEDIA:          tssMedia__2,
  vertical_align: `bottom`,
});

export const aspect_ratio_l = tss({
  MEDIA:    tssMedia__3,
  height:   `0`,
  position: `relative`,
});

export const aspect_ratio__16x9_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `56.25%`,
});

export const aspect_ratio__9x16_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `177.77%`,
});

export const aspect_ratio__4x3_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `75%`,
});

export const aspect_ratio__3x4_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `133.33%`,
});

export const aspect_ratio__6x4_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `66.6%`,
});

export const aspect_ratio__4x6_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `150%`,
});

export const aspect_ratio__8x5_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `62.5%`,
});

export const aspect_ratio__5x8_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `160%`,
});

export const aspect_ratio__7x5_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `71.42%`,
});

export const aspect_ratio__5x7_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `140%`,
});

export const aspect_ratio__1x1_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `100%`,
});

export const aspect_ratio__object_l = tss({
  MEDIA:    tssMedia__3,
  position: `absolute`,
  top:      `0`,
  right:    `0`,
  bottom:   `0`,
  left:     `0`,
  width:    `100%`,
  height:   `100%`,
  z_index:  `100`,
});

export const cover_l = tss({
  MEDIA:           tssMedia__3,
  background_size: `cover !important`,
});

export const contain_l = tss({
  MEDIA:           tssMedia__3,
  background_size: `contain !important`,
});

export const bg_center_l = tss({
  MEDIA:               tssMedia__3,
  background_repeat:   `no-repeat`,
  background_position: `center center`,
});

export const bg_top_l = tss({
  MEDIA:               tssMedia__3,
  background_repeat:   `no-repeat`,
  background_position: `top center`,
});

export const bg_right_l = tss({
  MEDIA:               tssMedia__3,
  background_repeat:   `no-repeat`,
  background_position: `center right`,
});

export const bg_bottom_l = tss({
  MEDIA:               tssMedia__3,
  background_repeat:   `no-repeat`,
  background_position: `bottom center`,
});

export const bg_left_l = tss({
  MEDIA:               tssMedia__3,
  background_repeat:   `no-repeat`,
  background_position: `center left`,
});

export const outline_l = tss({
  MEDIA:   tssMedia__3,
  outline: `1px solid`,
});

export const outline_transparent_l = tss({
  MEDIA:   tssMedia__3,
  outline: `1px solid transparent`,
});

export const outline_0_l = tss({
  MEDIA:   tssMedia__3,
  outline: `0`,
});

export const ba_l = tss({
  MEDIA:        tssMedia__3,
  border_style: `solid`,
  border_width: `1px`,
});

export const bt_l = tss({
  MEDIA:            tssMedia__3,
  border_top_style: `solid`,
  border_top_width: `1px`,
});

export const br_l = tss({
  MEDIA:              tssMedia__3,
  border_right_style: `solid`,
  border_right_width: `1px`,
});

export const bb_l = tss({
  MEDIA:               tssMedia__3,
  border_bottom_style: `solid`,
  border_bottom_width: `1px`,
});

export const bl_l = tss({
  MEDIA:             tssMedia__3,
  border_left_style: `solid`,
  border_left_width: `1px`,
});

export const bn_l = tss({
  MEDIA:        tssMedia__3,
  border_style: `none`,
  border_width: `0`,
});

export const br0_l = tss({
  MEDIA:         tssMedia__3,
  border_radius: `0`,
});

export const br1_l = tss({
  MEDIA:         tssMedia__3,
  border_radius: `.125rem`,
});

export const br2_l = tss({
  MEDIA:         tssMedia__3,
  border_radius: `.25rem`,
});

export const br3_l = tss({
  MEDIA:         tssMedia__3,
  border_radius: `.5rem`,
});

export const br4_l = tss({
  MEDIA:         tssMedia__3,
  border_radius: `1rem`,
});

export const br_100_l = tss({
  MEDIA:         tssMedia__3,
  border_radius: `100%`,
});

export const br_pill_l = tss({
  MEDIA:         tssMedia__3,
  border_radius: `9999px`,
});

export const br__bottom_l = tss({
  MEDIA:                   tssMedia__3,
  border_top_left_radius:  `0`,
  border_top_right_radius: `0`,
});

export const br__top_l = tss({
  MEDIA:                    tssMedia__3,
  border_bottom_left_radius: `0`,
  border_bottom_right_radius: `0`,
});

export const br__right_l = tss({
  MEDIA:                    tssMedia__3,
  border_top_left_radius:   `0`,
  border_bottom_left_radius: `0`,
});

export const br__left_l = tss({
  MEDIA:                    tssMedia__3,
  border_top_right_radius:  `0`,
  border_bottom_right_radius: `0`,
});

export const b__dotted_l = tss({
  MEDIA:        tssMedia__3,
  border_style: `dotted`,
});

export const b__dashed_l = tss({
  MEDIA:        tssMedia__3,
  border_style: `dashed`,
});

export const b__solid_l = tss({
  MEDIA:        tssMedia__3,
  border_style: `solid`,
});

export const b__none_l = tss({
  MEDIA:        tssMedia__3,
  border_style: `none`,
});

export const bw0_l = tss({
  MEDIA:        tssMedia__3,
  border_width: `0`,
});

export const bw1_l = tss({
  MEDIA:        tssMedia__3,
  border_width: `.125rem`,
});

export const bw2_l = tss({
  MEDIA:        tssMedia__3,
  border_width: `.25rem`,
});

export const bw3_l = tss({
  MEDIA:        tssMedia__3,
  border_width: `.5rem`,
});

export const bw4_l = tss({
  MEDIA:        tssMedia__3,
  border_width: `1rem`,
});

export const bw5_l = tss({
  MEDIA:        tssMedia__3,
  border_width: `2rem`,
});

export const bt_0_l = tss({
  MEDIA:            tssMedia__3,
  border_top_width: `0`,
});

export const br_0_l = tss({
  MEDIA:              tssMedia__3,
  border_right_width: `0`,
});

export const bb_0_l = tss({
  MEDIA:               tssMedia__3,
  border_bottom_width: `0`,
});

export const bl_0_l = tss({
  MEDIA:             tssMedia__3,
  border_left_width: `0`,
});

export const shadow_1_l = tss({
  MEDIA:      tssMedia__3,
  box_shadow: `0 0 4px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_2_l = tss({
  MEDIA:      tssMedia__3,
  box_shadow: `0 0 8px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_3_l = tss({
  MEDIA:      tssMedia__3,
  box_shadow: `2px 2px 4px 2px rgba( 0, 0, 0, .2 )`,
});

export const shadow_4_l = tss({
  MEDIA:      tssMedia__3,
  box_shadow: `2px 2px 8px 0 rgba( 0, 0, 0, .2 )`,
});

export const shadow_5_l = tss({
  MEDIA:      tssMedia__3,
  box_shadow: `4px 4px 8px 0 rgba( 0, 0, 0, .2 )`,
});

export const top_0_l = tss({
  MEDIA: tssMedia__3,
  top:   `0`,
});

export const left_0_l = tss({
  MEDIA: tssMedia__3,
  left:  `0`,
});

export const right_0_l = tss({
  MEDIA: tssMedia__3,
  right: `0`,
});

export const bottom_0_l = tss({
  MEDIA:  tssMedia__3,
  bottom: `0`,
});

export const top_1_l = tss({
  MEDIA: tssMedia__3,
  top:   `1rem`,
});

export const left_1_l = tss({
  MEDIA: tssMedia__3,
  left:  `1rem`,
});

export const right_1_l = tss({
  MEDIA: tssMedia__3,
  right: `1rem`,
});

export const bottom_1_l = tss({
  MEDIA:  tssMedia__3,
  bottom: `1rem`,
});

export const top_2_l = tss({
  MEDIA: tssMedia__3,
  top:   `2rem`,
});

export const left_2_l = tss({
  MEDIA: tssMedia__3,
  left:  `2rem`,
});

export const right_2_l = tss({
  MEDIA: tssMedia__3,
  right: `2rem`,
});

export const bottom_2_l = tss({
  MEDIA:  tssMedia__3,
  bottom: `2rem`,
});

export const top__1_l = tss({
  MEDIA: tssMedia__3,
  top:   `-1rem`,
});

export const right__1_l = tss({
  MEDIA: tssMedia__3,
  right: `-1rem`,
});

export const bottom__1_l = tss({
  MEDIA:  tssMedia__3,
  bottom: `-1rem`,
});

export const left__1_l = tss({
  MEDIA: tssMedia__3,
  left:  `-1rem`,
});

export const top__2_l = tss({
  MEDIA: tssMedia__3,
  top:   `-2rem`,
});

export const right__2_l = tss({
  MEDIA: tssMedia__3,
  right: `-2rem`,
});

export const bottom__2_l = tss({
  MEDIA:  tssMedia__3,
  bottom: `-2rem`,
});

export const left__2_l = tss({
  MEDIA: tssMedia__3,
  left:  `-2rem`,
});

export const absolute__fill_l = tss({
  MEDIA:  tssMedia__3,
  top:    `0`,
  right:  `0`,
  bottom: `0`,
  left:   `0`,
});

export const cl_l = tss({
  MEDIA: tssMedia__3,
  clear: `left`,
});

export const cr_l = tss({
  MEDIA: tssMedia__3,
  clear: `right`,
});

export const cb_l = tss({
  MEDIA: tssMedia__3,
  clear: `both`,
});

export const cn_l = tss({
  MEDIA: tssMedia__3,
  clear: `none`,
});

export const dn_l = tss({
  MEDIA:   tssMedia__3,
  display: `none`,
});

export const di_l = tss({
  MEDIA:   tssMedia__3,
  display: `inline`,
});

export const db_l = tss({
  MEDIA:   tssMedia__3,
  display: `block`,
});

export const dib_l = tss({
  MEDIA:   tssMedia__3,
  display: `inline-block`,
});

export const dit_l = tss({
  MEDIA:   tssMedia__3,
  display: `inline-table`,
});

export const dt_l = tss({
  MEDIA:   tssMedia__3,
  display: `table`,
});

export const dtc_l = tss({
  MEDIA:   tssMedia__3,
  display: `table-cell`,
});

export const dt_row_l = tss({
  MEDIA:   tssMedia__3,
  display: `table-row`,
});

export const dt_row_group_l = tss({
  MEDIA:   tssMedia__3,
  display: `table-row-group`,
});

export const dt_column_l = tss({
  MEDIA:   tssMedia__3,
  display: `table-column`,
});

export const dt_column_group_l = tss({
  MEDIA:   tssMedia__3,
  display: `table-column-group`,
});

export const dt__fixed_l = tss({
  MEDIA:        tssMedia__3,
  table_layout: `fixed`,
  width:        `100%`,
});

export const flex_l = tss({
  MEDIA:   tssMedia__3,
  display: `flex`,
});

export const inline_flex_l = tss({
  MEDIA:   tssMedia__3,
  display: `inline-flex`,
});

export const flex_auto_l = tss({
  MEDIA:      tssMedia__3,
  flex:       `1 1 auto`,
  min_width:  `0`,
  min_height: `0`,
});

export const flex_none_l = tss({
  MEDIA: tssMedia__3,
  flex:  `none`,
});

export const flex_column_l = tss({
  MEDIA:          tssMedia__3,
  flex_direction: `column`,
});

export const flex_row_l = tss({
  MEDIA:          tssMedia__3,
  flex_direction: `row`,
});

export const flex_wrap_l = tss({
  MEDIA:     tssMedia__3,
  flex_wrap: `wrap`,
});

export const flex_nowrap_l = tss({
  MEDIA:     tssMedia__3,
  flex_wrap: `nowrap`,
});

export const flex_wrap_reverse_l = tss({
  MEDIA:     tssMedia__3,
  flex_wrap: `wrap-reverse`,
});

export const flex_column_reverse_l = tss({
  MEDIA:          tssMedia__3,
  flex_direction: `column-reverse`,
});

export const flex_row_reverse_l = tss({
  MEDIA:          tssMedia__3,
  flex_direction: `row-reverse`,
});

export const items_start_l = tss({
  MEDIA:       tssMedia__3,
  align_items: `flex-start`,
});

export const items_end_l = tss({
  MEDIA:       tssMedia__3,
  align_items: `flex-end`,
});

export const items_center_l = tss({
  MEDIA:       tssMedia__3,
  align_items: `center`,
});

export const items_baseline_l = tss({
  MEDIA:       tssMedia__3,
  align_items: `baseline`,
});

export const items_stretch_l = tss({
  MEDIA:       tssMedia__3,
  align_items: `stretch`,
});

export const self_start_l = tss({
  MEDIA:      tssMedia__3,
  align_self: `flex-start`,
});

export const self_end_l = tss({
  MEDIA:      tssMedia__3,
  align_self: `flex-end`,
});

export const self_center_l = tss({
  MEDIA:      tssMedia__3,
  align_self: `center`,
});

export const self_baseline_l = tss({
  MEDIA:      tssMedia__3,
  align_self: `baseline`,
});

export const self_stretch_l = tss({
  MEDIA:      tssMedia__3,
  align_self: `stretch`,
});

export const justify_start_l = tss({
  MEDIA:           tssMedia__3,
  justify_content: `flex-start`,
});

export const justify_end_l = tss({
  MEDIA:           tssMedia__3,
  justify_content: `flex-end`,
});

export const justify_center_l = tss({
  MEDIA:           tssMedia__3,
  justify_content: `center`,
});

export const justify_between_l = tss({
  MEDIA:           tssMedia__3,
  justify_content: `space-between`,
});

export const justify_around_l = tss({
  MEDIA:           tssMedia__3,
  justify_content: `space-around`,
});

export const content_start_l = tss({
  MEDIA:         tssMedia__3,
  align_content: `flex-start`,
});

export const content_end_l = tss({
  MEDIA:         tssMedia__3,
  align_content: `flex-end`,
});

export const content_center_l = tss({
  MEDIA:         tssMedia__3,
  align_content: `center`,
});

export const content_between_l = tss({
  MEDIA:         tssMedia__3,
  align_content: `space-between`,
});

export const content_around_l = tss({
  MEDIA:         tssMedia__3,
  align_content: `space-around`,
});

export const content_stretch_l = tss({
  MEDIA:         tssMedia__3,
  align_content: `stretch`,
});

export const order_0_l = tss({
  MEDIA: tssMedia__3,
  order: `0`,
});

export const order_1_l = tss({
  MEDIA: tssMedia__3,
  order: `1`,
});

export const order_2_l = tss({
  MEDIA: tssMedia__3,
  order: `2`,
});

export const order_3_l = tss({
  MEDIA: tssMedia__3,
  order: `3`,
});

export const order_4_l = tss({
  MEDIA: tssMedia__3,
  order: `4`,
});

export const order_5_l = tss({
  MEDIA: tssMedia__3,
  order: `5`,
});

export const order_6_l = tss({
  MEDIA: tssMedia__3,
  order: `6`,
});

export const order_7_l = tss({
  MEDIA: tssMedia__3,
  order: `7`,
});

export const order_8_l = tss({
  MEDIA: tssMedia__3,
  order: `8`,
});

export const order_last_l = tss({
  MEDIA: tssMedia__3,
  order: `99999`,
});

export const flex_grow_0_l = tss({
  MEDIA:     tssMedia__3,
  flex_grow: `0`,
});

export const flex_grow_1_l = tss({
  MEDIA:     tssMedia__3,
  flex_grow: `1`,
});

export const flex_shrink_0_l = tss({
  MEDIA:       tssMedia__3,
  flex_shrink: `0`,
});

export const flex_shrink_1_l = tss({
  MEDIA:       tssMedia__3,
  flex_shrink: `1`,
});

export const fl_l = tss({
  MEDIA:    tssMedia__3,
  float:    `left`,
  _display: `inline`,
});

export const fr_l = tss({
  MEDIA:    tssMedia__3,
  float:    `right`,
  _display: `inline`,
});

export const fn_l = tss({
  MEDIA: tssMedia__3,
  float: `none`,
});

export const i_l = tss({
  MEDIA:      tssMedia__3,
  font_style: `italic`,
});

export const fs_normal_l = tss({
  MEDIA:      tssMedia__3,
  font_style: `normal`,
});

export const normal_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `normal`,
});

export const b_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `bold`,
});

export const fw1_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `100`,
});

export const fw2_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `200`,
});

export const fw3_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `300`,
});

export const fw4_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `400`,
});

export const fw5_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `500`,
});

export const fw6_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `600`,
});

export const fw7_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `700`,
});

export const fw8_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `800`,
});

export const fw9_l = tss({
  MEDIA:       tssMedia__3,
  font_weight: `900`,
});

export const h1_l = tss({
  MEDIA:  tssMedia__3,
  height: `1rem`,
});

export const h2_l = tss({
  MEDIA:  tssMedia__3,
  height: `2rem`,
});

export const h3_l = tss({
  MEDIA:  tssMedia__3,
  height: `4rem`,
});

export const h4_l = tss({
  MEDIA:  tssMedia__3,
  height: `8rem`,
});

export const h5_l = tss({
  MEDIA:  tssMedia__3,
  height: `16rem`,
});

export const h_25_l = tss({
  MEDIA:  tssMedia__3,
  height: `25%`,
});

export const h_50_l = tss({
  MEDIA:  tssMedia__3,
  height: `50%`,
});

export const h_75_l = tss({
  MEDIA:  tssMedia__3,
  height: `75%`,
});

export const h_100_l = tss({
  MEDIA:  tssMedia__3,
  height: `100%`,
});

export const min_h_100_l = tss({
  MEDIA:      tssMedia__3,
  min_height: `100%`,
});

export const vh_25_l = tss({
  MEDIA:  tssMedia__3,
  height: `25vh`,
});

export const vh_50_l = tss({
  MEDIA:  tssMedia__3,
  height: `50vh`,
});

export const vh_75_l = tss({
  MEDIA:  tssMedia__3,
  height: `75vh`,
});

export const vh_100_l = tss({
  MEDIA:  tssMedia__3,
  height: `100vh`,
});

export const min_vh_100_l = tss({
  MEDIA:      tssMedia__3,
  min_height: `100vh`,
});

export const h_auto_l = tss({
  MEDIA:  tssMedia__3,
  height: `auto`,
});

export const h_inherit_l = tss({
  MEDIA:  tssMedia__3,
  height: `inherit`,
});

export const tracked_l = tss({
  MEDIA:          tssMedia__3,
  letter_spacing: `.1em`,
});

export const tracked_tight_l = tss({
  MEDIA:          tssMedia__3,
  letter_spacing: `-.05em`,
});

export const tracked_mega_l = tss({
  MEDIA:          tssMedia__3,
  letter_spacing: `.25em`,
});

export const lh_solid_l = tss({
  MEDIA:       tssMedia__3,
  line_height: `1`,
});

export const lh_title_l = tss({
  MEDIA:       tssMedia__3,
  line_height: `1.25`,
});

export const lh_copy_l = tss({
  MEDIA:       tssMedia__3,
  line_height: `1.5`,
});

export const mw_100_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `100%`,
});

export const mw1_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `1rem`,
});

export const mw2_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `2rem`,
});

export const mw3_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `4rem`,
});

export const mw4_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `8rem`,
});

export const mw5_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `16rem`,
});

export const mw6_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `32rem`,
});

export const mw7_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `48rem`,
});

export const mw8_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `64rem`,
});

export const mw9_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `96rem`,
});

export const mw_none_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `none`,
});

export const w1_l = tss({
  MEDIA: tssMedia__3,
  width: `1rem`,
});

export const w2_l = tss({
  MEDIA: tssMedia__3,
  width: `2rem`,
});

export const w3_l = tss({
  MEDIA: tssMedia__3,
  width: `4rem`,
});

export const w4_l = tss({
  MEDIA: tssMedia__3,
  width: `8rem`,
});

export const w5_l = tss({
  MEDIA: tssMedia__3,
  width: `16rem`,
});

export const w_10_l = tss({
  MEDIA: tssMedia__3,
  width: `10%`,
});

export const w_20_l = tss({
  MEDIA: tssMedia__3,
  width: `20%`,
});

export const w_25_l = tss({
  MEDIA: tssMedia__3,
  width: `25%`,
});

export const w_30_l = tss({
  MEDIA: tssMedia__3,
  width: `30%`,
});

export const w_33_l = tss({
  MEDIA: tssMedia__3,
  width: `33%`,
});

export const w_34_l = tss({
  MEDIA: tssMedia__3,
  width: `34%`,
});

export const w_40_l = tss({
  MEDIA: tssMedia__3,
  width: `40%`,
});

export const w_50_l = tss({
  MEDIA: tssMedia__3,
  width: `50%`,
});

export const w_60_l = tss({
  MEDIA: tssMedia__3,
  width: `60%`,
});

export const w_70_l = tss({
  MEDIA: tssMedia__3,
  width: `70%`,
});

export const w_75_l = tss({
  MEDIA: tssMedia__3,
  width: `75%`,
});

export const w_80_l = tss({
  MEDIA: tssMedia__3,
  width: `80%`,
});

export const w_90_l = tss({
  MEDIA: tssMedia__3,
  width: `90%`,
});

export const w_100_l = tss({
  MEDIA: tssMedia__3,
  width: `100%`,
});

export const w_third_l = tss({
  MEDIA: tssMedia__3,
  width: `33.33333%`,
});

export const w_two_thirds_l = tss({
  MEDIA: tssMedia__3,
  width: `66.66667%`,
});

export const w_auto_l = tss({
  MEDIA: tssMedia__3,
  width: `auto`,
});

export const overflow_visible_l = tss({
  MEDIA:    tssMedia__3,
  overflow: `visible`,
});

export const overflow_hidden_l = tss({
  MEDIA:    tssMedia__3,
  overflow: `hidden`,
});

export const overflow_scroll_l = tss({
  MEDIA:    tssMedia__3,
  overflow: `scroll`,
});

export const overflow_auto_l = tss({
  MEDIA:    tssMedia__3,
  overflow: `auto`,
});

export const overflow_x_visible_l = tss({
  MEDIA:      tssMedia__3,
  overflow_x: `visible`,
});

export const overflow_x_hidden_l = tss({
  MEDIA:      tssMedia__3,
  overflow_x: `hidden`,
});

export const overflow_x_scroll_l = tss({
  MEDIA:      tssMedia__3,
  overflow_x: `scroll`,
});

export const overflow_x_auto_l = tss({
  MEDIA:      tssMedia__3,
  overflow_x: `auto`,
});

export const overflow_y_visible_l = tss({
  MEDIA:      tssMedia__3,
  overflow_y: `visible`,
});

export const overflow_y_hidden_l = tss({
  MEDIA:      tssMedia__3,
  overflow_y: `hidden`,
});

export const overflow_y_scroll_l = tss({
  MEDIA:      tssMedia__3,
  overflow_y: `scroll`,
});

export const overflow_y_auto_l = tss({
  MEDIA:      tssMedia__3,
  overflow_y: `auto`,
});

export const static_l = tss({
  MEDIA:    tssMedia__3,
  position: `static`,
});

export const relative_l = tss({
  MEDIA:    tssMedia__3,
  position: `relative`,
});

export const absolute_l = tss({
  MEDIA:    tssMedia__3,
  position: `absolute`,
});

export const fixed_l = tss({
  MEDIA:    tssMedia__3,
  position: `fixed`,
});

export const rotate_45_l = tss({
  MEDIA:             tssMedia__3,
  _webkit_transform: `rotate( 45deg )`,
  transform:         `rotate( 45deg )`,
});

export const rotate_90_l = tss({
  MEDIA:             tssMedia__3,
  _webkit_transform: `rotate( 90deg )`,
  transform:         `rotate( 90deg )`,
});

export const rotate_135_l = tss({
  MEDIA:             tssMedia__3,
  _webkit_transform: `rotate( 135deg )`,
  transform:         `rotate( 135deg )`,
});

export const rotate_180_l = tss({
  MEDIA:             tssMedia__3,
  _webkit_transform: `rotate( 180deg )`,
  transform:         `rotate( 180deg )`,
});

export const rotate_225_l = tss({
  MEDIA:             tssMedia__3,
  _webkit_transform: `rotate( 225deg )`,
  transform:         `rotate( 225deg )`,
});

export const rotate_270_l = tss({
  MEDIA:             tssMedia__3,
  _webkit_transform: `rotate( 270deg )`,
  transform:         `rotate( 270deg )`,
});

export const rotate_315_l = tss({
  MEDIA:             tssMedia__3,
  _webkit_transform: `rotate( 315deg )`,
  transform:         `rotate( 315deg )`,
});

export const pa0_l = tss({
  MEDIA:   tssMedia__3,
  padding: `0`,
});

export const pa1_l = tss({
  MEDIA:   tssMedia__3,
  padding: `.25rem`,
});

export const pa2_l = tss({
  MEDIA:   tssMedia__3,
  padding: `.5rem`,
});

export const pa3_l = tss({
  MEDIA:   tssMedia__3,
  padding: `1rem`,
});

export const pa4_l = tss({
  MEDIA:   tssMedia__3,
  padding: `2rem`,
});

export const pa5_l = tss({
  MEDIA:   tssMedia__3,
  padding: `4rem`,
});

export const pa6_l = tss({
  MEDIA:   tssMedia__3,
  padding: `8rem`,
});

export const pa7_l = tss({
  MEDIA:   tssMedia__3,
  padding: `16rem`,
});

export const pl0_l = tss({
  MEDIA:        tssMedia__3,
  padding_left: `0`,
});

export const pl1_l = tss({
  MEDIA:        tssMedia__3,
  padding_left: `.25rem`,
});

export const pl2_l = tss({
  MEDIA:        tssMedia__3,
  padding_left: `.5rem`,
});

export const pl3_l = tss({
  MEDIA:        tssMedia__3,
  padding_left: `1rem`,
});

export const pl4_l = tss({
  MEDIA:        tssMedia__3,
  padding_left: `2rem`,
});

export const pl5_l = tss({
  MEDIA:        tssMedia__3,
  padding_left: `4rem`,
});

export const pl6_l = tss({
  MEDIA:        tssMedia__3,
  padding_left: `8rem`,
});

export const pl7_l = tss({
  MEDIA:        tssMedia__3,
  padding_left: `16rem`,
});

export const pr0_l = tss({
  MEDIA:         tssMedia__3,
  padding_right: `0`,
});

export const pr1_l = tss({
  MEDIA:         tssMedia__3,
  padding_right: `.25rem`,
});

export const pr2_l = tss({
  MEDIA:         tssMedia__3,
  padding_right: `.5rem`,
});

export const pr3_l = tss({
  MEDIA:         tssMedia__3,
  padding_right: `1rem`,
});

export const pr4_l = tss({
  MEDIA:         tssMedia__3,
  padding_right: `2rem`,
});

export const pr5_l = tss({
  MEDIA:         tssMedia__3,
  padding_right: `4rem`,
});

export const pr6_l = tss({
  MEDIA:         tssMedia__3,
  padding_right: `8rem`,
});

export const pr7_l = tss({
  MEDIA:         tssMedia__3,
  padding_right: `16rem`,
});

export const pb0_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `0`,
});

export const pb1_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `.25rem`,
});

export const pb2_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `.5rem`,
});

export const pb3_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `1rem`,
});

export const pb4_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `2rem`,
});

export const pb5_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `4rem`,
});

export const pb6_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `8rem`,
});

export const pb7_l = tss({
  MEDIA:          tssMedia__3,
  padding_bottom: `16rem`,
});

export const pt0_l = tss({
  MEDIA:       tssMedia__3,
  padding_top: `0`,
});

export const pt1_l = tss({
  MEDIA:       tssMedia__3,
  padding_top: `.25rem`,
});

export const pt2_l = tss({
  MEDIA:       tssMedia__3,
  padding_top: `.5rem`,
});

export const pt3_l = tss({
  MEDIA:       tssMedia__3,
  padding_top: `1rem`,
});

export const pt4_l = tss({
  MEDIA:       tssMedia__3,
  padding_top: `2rem`,
});

export const pt5_l = tss({
  MEDIA:       tssMedia__3,
  padding_top: `4rem`,
});

export const pt6_l = tss({
  MEDIA:       tssMedia__3,
  padding_top: `8rem`,
});

export const pt7_l = tss({
  MEDIA:       tssMedia__3,
  padding_top: `16rem`,
});

export const pv0_l = tss({
  MEDIA:          tssMedia__3,
  padding_top:    `0`,
  padding_bottom: `0`,
});

export const pv1_l = tss({
  MEDIA:          tssMedia__3,
  padding_top:    `.25rem`,
  padding_bottom: `.25rem`,
});

export const pv2_l = tss({
  MEDIA:          tssMedia__3,
  padding_top:    `.5rem`,
  padding_bottom: `.5rem`,
});

export const pv3_l = tss({
  MEDIA:          tssMedia__3,
  padding_top:    `1rem`,
  padding_bottom: `1rem`,
});

export const pv4_l = tss({
  MEDIA:          tssMedia__3,
  padding_top:    `2rem`,
  padding_bottom: `2rem`,
});

export const pv5_l = tss({
  MEDIA:          tssMedia__3,
  padding_top:    `4rem`,
  padding_bottom: `4rem`,
});

export const pv6_l = tss({
  MEDIA:          tssMedia__3,
  padding_top:    `8rem`,
  padding_bottom: `8rem`,
});

export const pv7_l = tss({
  MEDIA:          tssMedia__3,
  padding_top:    `16rem`,
  padding_bottom: `16rem`,
});

export const ph0_l = tss({
  MEDIA:         tssMedia__3,
  padding_left:  `0`,
  padding_right: `0`,
});

export const ph1_l = tss({
  MEDIA:         tssMedia__3,
  padding_left:  `.25rem`,
  padding_right: `.25rem`,
});

export const ph2_l = tss({
  MEDIA:         tssMedia__3,
  padding_left:  `.5rem`,
  padding_right: `.5rem`,
});

export const ph3_l = tss({
  MEDIA:         tssMedia__3,
  padding_left:  `1rem`,
  padding_right: `1rem`,
});

export const ph4_l = tss({
  MEDIA:         tssMedia__3,
  padding_left:  `2rem`,
  padding_right: `2rem`,
});

export const ph5_l = tss({
  MEDIA:         tssMedia__3,
  padding_left:  `4rem`,
  padding_right: `4rem`,
});

export const ph6_l = tss({
  MEDIA:         tssMedia__3,
  padding_left:  `8rem`,
  padding_right: `8rem`,
});

export const ph7_l = tss({
  MEDIA:         tssMedia__3,
  padding_left:  `16rem`,
  padding_right: `16rem`,
});

export const ma0_l = tss({
  MEDIA:  tssMedia__3,
  margin: `0`,
});

export const ma1_l = tss({
  MEDIA:  tssMedia__3,
  margin: `.25rem`,
});

export const ma2_l = tss({
  MEDIA:  tssMedia__3,
  margin: `.5rem`,
});

export const ma3_l = tss({
  MEDIA:  tssMedia__3,
  margin: `1rem`,
});

export const ma4_l = tss({
  MEDIA:  tssMedia__3,
  margin: `2rem`,
});

export const ma5_l = tss({
  MEDIA:  tssMedia__3,
  margin: `4rem`,
});

export const ma6_l = tss({
  MEDIA:  tssMedia__3,
  margin: `8rem`,
});

export const ma7_l = tss({
  MEDIA:  tssMedia__3,
  margin: `16rem`,
});

export const ml0_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `0`,
});

export const ml1_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `.25rem`,
});

export const ml2_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `.5rem`,
});

export const ml3_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `1rem`,
});

export const ml4_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `2rem`,
});

export const ml5_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `4rem`,
});

export const ml6_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `8rem`,
});

export const ml7_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `16rem`,
});

export const mr0_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `0`,
});

export const mr1_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `.25rem`,
});

export const mr2_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `.5rem`,
});

export const mr3_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `1rem`,
});

export const mr4_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `2rem`,
});

export const mr5_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `4rem`,
});

export const mr6_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `8rem`,
});

export const mr7_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `16rem`,
});

export const mb0_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `0`,
});

export const mb1_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `.25rem`,
});

export const mb2_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `.5rem`,
});

export const mb3_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `1rem`,
});

export const mb4_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `2rem`,
});

export const mb5_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `4rem`,
});

export const mb6_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `8rem`,
});

export const mb7_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `16rem`,
});

export const mt0_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `0`,
});

export const mt1_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `.25rem`,
});

export const mt2_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `.5rem`,
});

export const mt3_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `1rem`,
});

export const mt4_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `2rem`,
});

export const mt5_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `4rem`,
});

export const mt6_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `8rem`,
});

export const mt7_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `16rem`,
});

export const mv0_l = tss({
  MEDIA:         tssMedia__3,
  margin_top:    `0`,
  margin_bottom: `0`,
});

export const mv1_l = tss({
  MEDIA:         tssMedia__3,
  margin_top:    `.25rem`,
  margin_bottom: `.25rem`,
});

export const mv2_l = tss({
  MEDIA:         tssMedia__3,
  margin_top:    `.5rem`,
  margin_bottom: `.5rem`,
});

export const mv3_l = tss({
  MEDIA:         tssMedia__3,
  margin_top:    `1rem`,
  margin_bottom: `1rem`,
});

export const mv4_l = tss({
  MEDIA:         tssMedia__3,
  margin_top:    `2rem`,
  margin_bottom: `2rem`,
});

export const mv5_l = tss({
  MEDIA:         tssMedia__3,
  margin_top:    `4rem`,
  margin_bottom: `4rem`,
});

export const mv6_l = tss({
  MEDIA:         tssMedia__3,
  margin_top:    `8rem`,
  margin_bottom: `8rem`,
});

export const mv7_l = tss({
  MEDIA:         tssMedia__3,
  margin_top:    `16rem`,
  margin_bottom: `16rem`,
});

export const mh0_l = tss({
  MEDIA:        tssMedia__3,
  margin_left:  `0`,
  margin_right: `0`,
});

export const mh1_l = tss({
  MEDIA:        tssMedia__3,
  margin_left:  `.25rem`,
  margin_right: `.25rem`,
});

export const mh2_l = tss({
  MEDIA:        tssMedia__3,
  margin_left:  `.5rem`,
  margin_right: `.5rem`,
});

export const mh3_l = tss({
  MEDIA:        tssMedia__3,
  margin_left:  `1rem`,
  margin_right: `1rem`,
});

export const mh4_l = tss({
  MEDIA:        tssMedia__3,
  margin_left:  `2rem`,
  margin_right: `2rem`,
});

export const mh5_l = tss({
  MEDIA:        tssMedia__3,
  margin_left:  `4rem`,
  margin_right: `4rem`,
});

export const mh6_l = tss({
  MEDIA:        tssMedia__3,
  margin_left:  `8rem`,
  margin_right: `8rem`,
});

export const mh7_l = tss({
  MEDIA:        tssMedia__3,
  margin_left:  `16rem`,
  margin_right: `16rem`,
});

export const na1_l = tss({
  MEDIA:  tssMedia__3,
  margin: `-0.25rem`,
});

export const na2_l = tss({
  MEDIA:  tssMedia__3,
  margin: `-0.5rem`,
});

export const na3_l = tss({
  MEDIA:  tssMedia__3,
  margin: `-1rem`,
});

export const na4_l = tss({
  MEDIA:  tssMedia__3,
  margin: `-2rem`,
});

export const na5_l = tss({
  MEDIA:  tssMedia__3,
  margin: `-4rem`,
});

export const na6_l = tss({
  MEDIA:  tssMedia__3,
  margin: `-8rem`,
});

export const na7_l = tss({
  MEDIA:  tssMedia__3,
  margin: `-16rem`,
});

export const nl1_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `-0.25rem`,
});

export const nl2_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `-0.5rem`,
});

export const nl3_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `-1rem`,
});

export const nl4_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `-2rem`,
});

export const nl5_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `-4rem`,
});

export const nl6_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `-8rem`,
});

export const nl7_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `-16rem`,
});

export const nr1_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `-0.25rem`,
});

export const nr2_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `-0.5rem`,
});

export const nr3_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `-1rem`,
});

export const nr4_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `-2rem`,
});

export const nr5_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `-4rem`,
});

export const nr6_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `-8rem`,
});

export const nr7_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `-16rem`,
});

export const nb1_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `-0.25rem`,
});

export const nb2_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `-0.5rem`,
});

export const nb3_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `-1rem`,
});

export const nb4_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `-2rem`,
});

export const nb5_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `-4rem`,
});

export const nb6_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `-8rem`,
});

export const nb7_l = tss({
  MEDIA:         tssMedia__3,
  margin_bottom: `-16rem`,
});

export const nt1_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `-0.25rem`,
});

export const nt2_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `-0.5rem`,
});

export const nt3_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `-1rem`,
});

export const nt4_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `-2rem`,
});

export const nt5_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `-4rem`,
});

export const nt6_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `-8rem`,
});

export const nt7_l = tss({
  MEDIA:      tssMedia__3,
  margin_top: `-16rem`,
});

export const strike_l = tss({
  MEDIA:           tssMedia__3,
  text_decoration: `line-through`,
});

export const underline_l = tss({
  MEDIA:           tssMedia__3,
  text_decoration: `underline`,
});

export const no_underline_l = tss({
  MEDIA:           tssMedia__3,
  text_decoration: `none`,
});

export const tl_l = tss({
  MEDIA:      tssMedia__3,
  text_align: `left`,
});

export const tr_l = tss({
  MEDIA:      tssMedia__3,
  text_align: `right`,
});

export const tc_l = tss({
  MEDIA:      tssMedia__3,
  text_align: `center`,
});

export const tj_l = tss({
  MEDIA:      tssMedia__3,
  text_align: `justify`,
});

export const ttc_l = tss({
  MEDIA:          tssMedia__3,
  text_transform: `capitalize`,
});

export const ttl_l = tss({
  MEDIA:          tssMedia__3,
  text_transform: `lowercase`,
});

export const ttu_l = tss({
  MEDIA:          tssMedia__3,
  text_transform: `uppercase`,
});

export const ttn_l = tss({
  MEDIA:          tssMedia__3,
  text_transform: `none`,
});

export const f_6_l = tss(join({  MEDIA: tssMedia__3,}, tssCommon__9));

export const f_headline_l = tss(join({  MEDIA: tssMedia__3,}, tssCommon__9));

export const f_5_l = tss(join({  MEDIA: tssMedia__3,}, tssCommon__10));

export const f_subheadline_l = tss(join({  MEDIA: tssMedia__3,}, tssCommon__10));

export const f1_l = tss({
  MEDIA:     tssMedia__3,
  font_size: `3rem`,
});

export const f2_l = tss({
  MEDIA:     tssMedia__3,
  font_size: `2.25rem`,
});

export const f3_l = tss({
  MEDIA:     tssMedia__3,
  font_size: `1.5rem`,
});

export const f4_l = tss({
  MEDIA:     tssMedia__3,
  font_size: `1.25rem`,
});

export const f5_l = tss({
  MEDIA:     tssMedia__3,
  font_size: `1rem`,
});

export const f6_l = tss({
  MEDIA:     tssMedia__3,
  font_size: `.875rem`,
});

export const f7_l = tss({
  MEDIA:     tssMedia__3,
  font_size: `.75rem`,
});

export const measure_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `30em`,
});

export const measure_wide_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `34em`,
});

export const measure_narrow_l = tss({
  MEDIA:     tssMedia__3,
  max_width: `20em`,
});

export const indent_l = tss({
  MEDIA:         tssMedia__3,
  text_indent:   `1em`,
  margin_top:    `0`,
  margin_bottom: `0`,
});

export const small_caps_l = tss({
  MEDIA:        tssMedia__3,
  font_variant: `small-caps`,
});

export const truncate_l = tss({
  MEDIA:         tssMedia__3,
  white_space:   `nowrap`,
  overflow:      `hidden`,
  text_overflow: `ellipsis`,
});

export const center_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `auto`,
  margin_left:  `auto`,
});

export const mr_auto_l = tss({
  MEDIA:        tssMedia__3,
  margin_right: `auto`,
});

export const ml_auto_l = tss({
  MEDIA:       tssMedia__3,
  margin_left: `auto`,
});

export const clip_l = tss({
  MEDIA:     tssMedia__3,
  position:  `fixed !important`,
  _position: `absolute !important`,
  clip:      [`rect( 1px 1px 1px 1px )`,`rect( 1px, 1px, 1px, 1px )`],
});

export const ws_normal_l = tss({
  MEDIA:       tssMedia__3,
  white_space: `normal`,
});

export const nowrap_l = tss({
  MEDIA:       tssMedia__3,
  white_space: `nowrap`,
});

export const pre_l = tss({
  MEDIA:       tssMedia__3,
  white_space: `pre`,
});

export const v_base_l = tss({
  MEDIA:          tssMedia__3,
  vertical_align: `baseline`,
});

export const v_mid_l = tss({
  MEDIA:          tssMedia__3,
  vertical_align: `middle`,
});

export const v_top_l = tss({
  MEDIA:          tssMedia__3,
  vertical_align: `top`,
});

export const v_btm_l = tss({
  MEDIA:          tssMedia__3,
  vertical_align: `bottom`,
});

