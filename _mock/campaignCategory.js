import { Others } from '../sections/home/FeaturesPic';
import socialImage from '../sections/home/FeaturesPic/social.png';
import petsImage from '../sections/home/FeaturesPic/pets.webp';
import educationImage from '../sections/home/FeaturesPic/edu.webp';
import envImage from '../sections/home/FeaturesPic/env.webp';
import child from '../sections/home/FeaturesPic/child.png';

export const CATEGORY_OPTION = [
  {
    label: 'Animals Welfare',
    value: 'animal',
  },
  {
    label: 'Environmental Sustainability',
    value: 'environment',
  },
  {
    label: 'Child Welfare',
    value: 'child',
  },
  {
    label: 'Women Empowerment',
    value: 'women',
  },
  {
    label: 'Disaster Relief',
    value: 'disaster',
  },
  {
    label: 'Creative Ideas',
    value: 'impactfulideas',
  },
  {
    label: 'Spirituality',
    value: 'spiritual',
  },
  {
    label: 'Oldage Care',
    value: 'oldage',
  },
  {
    label: 'Medical',
    value: 'medical',
  },
  {
    label: 'Personal Issues',
    value: 'personal',
  },
  {
    label: 'Others',
    value: 'others',
  },
];

export const FILTER_CATEGORY_OPTIONS = [
  {
    label: 'Animals',
    value: 'animal',
    bg_color: 'rgb(251, 248, 228)',
    boxShadow: 'rgb(218, 177, 20)',
    src: petsImage,
  },
  {
    label: 'Environment',
    value: 'environment',
    bg_color: 'rgb(233, 252, 255)',
    boxShadow: 'rgb(99, 192, 205)',
    src: envImage,
  },
  {
    label: 'Child Welfare',
    value: 'child',
    bg_color: 'rgb(236, 247, 240)',
    boxShadow: 'rgb(85, 185, 120)',
    src: educationImage,
  },
  {
    label: 'Women',
    value: 'women',
    bg_color: 'rgb(218, 232, 249)',
    boxShadow: 'rgb(82, 137, 204)',
    src: child,
  },
  { label: 'Others', value: 'others', bg_color: '#fff', boxShadow: 'grey', src: Others },
];

export const FILTER_CATEGORY_MOBILE = [
  { label: 'Animals', value: 'animal', src: petsImage },
  {
    label: 'Child Welfare',
    value: 'child',
    src: child,
  },
  { label: 'Environment', value: 'environment', src: envImage },
  { label: 'Women', value: 'women', src: educationImage },
  {
    label: 'others',
    value: 'others',
    src: Others,
  },
];
