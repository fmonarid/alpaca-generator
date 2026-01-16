/**
 * ALPACA DATA STRUCTURE
 *
 * This file defines all customization categories and their respective options.
 * - id: Unique identifier used for image folders and layer IDs.
 * - label: Friendly name displayed on buttons.
 * - zIndex: Defines the stacking order (Higher layers stay in front).
 * - options: List of available PNG files in the corresponding folder.
 */
export const ALPACA_CATEGORIES = [
  {
    id: 'backgrounds',
    label: 'Background',
    zIndex: 1,
    options: [
      { id: 'blue50', label: 'Blue 50', filename: 'blue50.png' },
      { id: 'blue60', label: 'Blue 60', filename: 'blue60.png' },
      { id: 'blue70', label: 'Blue 70', filename: 'blue70.png' },
      { id: 'darkblue30', label: 'Dark Blue 30', filename: 'darkblue30.png' },
      { id: 'darkblue50', label: 'Dark Blue 50', filename: 'darkblue50.png' },
      { id: 'darkblue70', label: 'Dark Blue 70', filename: 'darkblue70.png' },
      { id: 'green50', label: 'Green 50', filename: 'green50.png' },
      { id: 'green60', label: 'Green 60', filename: 'green60.png' },
      { id: 'green70', label: 'Green 70', filename: 'green70.png' },
      { id: 'grey40', label: 'Grey 40', filename: 'grey40.png' },
      { id: 'grey70', label: 'Grey 70', filename: 'grey70.png' },
      { id: 'grey80', label: 'Grey 80', filename: 'grey80.png' },
      { id: 'red50', label: 'Red 50', filename: 'red50.png' },
      { id: 'red60', label: 'Red 60', filename: 'red60.png' },
      { id: 'red70', label: 'Red 70', filename: 'red70.png' },
      { id: 'yellow50', label: 'Yellow 50', filename: 'yellow50.png' },
      { id: 'yellow60', label: 'Yellow 60', filename: 'yellow60.png' },
      { id: 'yellow70', label: 'Yellow 70', filename: 'yellow70.png' },
    ],
  },
  {
    id: 'ears',
    label: 'Ears',
    zIndex: 2,
    options: [
      { id: 'default', label: 'Default', filename: 'default.png' },
      {
        id: 'tilt-backward',
        label: 'Tilt Backward',
        filename: 'tilt-backward.png',
      },
      {
        id: 'tilt-forward',
        label: 'Tilt Forward',
        filename: 'tilt-forward.png',
      },
    ],
  },
  {
    id: 'neck',
    label: 'Neck',
    zIndex: 3,
    options: [
      { id: 'default', label: 'Default', filename: 'default.png' },
      {
        id: 'bend-backward',
        label: 'Bend Backward',
        filename: 'bend-backward.png',
      },
      {
        id: 'bend-forward',
        label: 'Bend Forward',
        filename: 'bend-forward.png',
      },
      { id: 'thick', label: 'Thick', filename: 'thick.png' },
    ],
  },
  {
    id: 'hair',
    label: 'Hair',
    zIndex: 4,
    options: [
      { id: 'default', label: 'Default', filename: 'default.png' },
      { id: 'bang', label: 'Bang', filename: 'bang.png' },
      { id: 'curls', label: 'Curls', filename: 'curls.png' },
      { id: 'elegant', label: 'Elegant', filename: 'elegant.png' },
      { id: 'fancy', label: 'Fancy', filename: 'fancy.png' },
      { id: 'quiff', label: 'Quiff', filename: 'quiff.png' },
      { id: 'short', label: 'Short', filename: 'short.png' },
    ],
  },
  {
    id: 'eyes',
    label: 'Eyes',
    zIndex: 5,
    options: [
      { id: 'default', label: 'Default', filename: 'default.png' },
      { id: 'angry', label: 'Angry', filename: 'angry.png' },
      { id: 'naughty', label: 'Naughty', filename: 'naughty.png' },
      { id: 'panda', label: 'Panda', filename: 'panda.png' },
      { id: 'smart', label: 'Smart', filename: 'smart.png' },
      { id: 'star', label: 'Star', filename: 'star.png' },
    ],
  },
  {
    id: 'nose',
    label: 'Nose',
    zIndex: 6,
    options: [{ id: 'default', label: 'Default', filename: 'default.png' }],
  },
  {
    id: 'mouth',
    label: 'Mouth',
    zIndex: 7,
    options: [
      { id: 'default', label: 'Default', filename: 'default.png' },
      { id: 'astonished', label: 'Astonished', filename: 'astonished.png' },
      { id: 'eating', label: 'Eating', filename: 'eating.png' },
      { id: 'laugh', label: 'Laugh', filename: 'laugh.png' },
      { id: 'tongue', label: 'Tongue', filename: 'tongue.png' },
    ],
  },
  {
    id: 'leg',
    label: 'Leg',
    zIndex: 8,
    options: [
      { id: 'default', label: 'Default', filename: 'default.png' },
      { id: 'bubble-tea', label: 'Bubble Tea', filename: 'bubble-tea.png' },
      { id: 'cookie', label: 'Cookie', filename: 'cookie.png' },
      {
        id: 'game-console',
        label: 'Game Console',
        filename: 'game-console.png',
      },
      {
        id: 'tilt-backward',
        label: 'Tilt Backward',
        filename: 'tilt-backward.png',
      },
      {
        id: 'tilt-forward',
        label: 'Tilt Forward',
        filename: 'tilt-forward.png',
      },
    ],
  },
  {
    id: 'accessories',
    label: 'Accessories',
    zIndex: 9,
    options: [
      { id: 'none', label: 'None', filename: '' },
      { id: 'earings', label: 'Earings', filename: 'earings.png' },
      { id: 'flower', label: 'Flower', filename: 'flower.png' },
      { id: 'glasses', label: 'Glasses', filename: 'glasses.png' },
      { id: 'headphone', label: 'Headphone', filename: 'headphone.png' },
    ],
  },
];
