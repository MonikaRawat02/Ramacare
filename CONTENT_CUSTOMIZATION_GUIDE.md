# How to Customize Content for Each Subcategory Page

Each subcategory page file is located in:
```
src/pagesservices{category-name}-dubai/{subcategory-name}.jsx
```

## Example: Customizing Skin Treatment Page

File: `src/pagesservices.jsx`

### Step 1: Create a Custom Content Object

Add a `customContent` object in your page file with the content you want to customize:

```javascript
const customContent = {
  hero: {
    description: 'Your custom hero description here...'
  },
  overview: {
    title: 'Your custom title',
    leftCards: [
      {
        id: 1,
        title: 'What is it?',
        description: 'Your custom description...'
      },
      // ... more cards
    ],
    rootCauses: [
      {
        id: 1,
        title: 'Cause Title',
        description: 'Cause description...',
        severity: 'High',
        severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
      },
      // ... more causes
    ],
    quickFacts: [
      { label: 'Treatment Type', value: 'Your value' },
      // ... more facts
    ],
    approachCards: [
      {
        id: 1,
        title: 'Card Title',
        description: 'Card description...',
        hasLearnMore: true,
        expandedContent: 'Expanded content here...'
      },
      // ... more cards
    ]
  },
  benefits: {
    benefits: [
      {
        id: 1,
        title: 'Benefit Title',
        percentage: 90,
        description: 'Benefit description...'
      },
      // ... more benefits
    ]
  }
};
```

### Step 2: Pass Content to Components

Pass the custom content to the components:

```javascript
<TreatmentHero 
  categoryName={categoryName}
  subcategoryName={subcategoryName}
  description={customContent.hero.description}
/>

<TreatmentOverview 
  subcategoryName={subcategoryName}
  content={customContent.overview}
/>

<TreatmentBenefits 
  content={customContent.benefits}
/>
```

## Content Structure Details

### Hero Content
- `description`: Main description text shown in the hero section

### Overview Content
- `title`: Section title
- `leftCards`: Array of info cards (What is it?, Who is it for?, Duration)
- `rootCauses`: Array of root cause items (shown in "The Problem" tab)
- `quickFacts`: Array of quick fact items
- `approachCards`: Array of treatment approach cards (shown in "Our Solution" tab)

### Benefits Content
- `benefits`: Array of benefit items with percentage and description
- `comparisonData`: Optional comparison table data

## All Page Files Location

- **Aesthetic Dermatology**: `src/pagesservicesaesthetic-dermatology-dubai/`
- **dental**: `src/pagesservicesdental-dubai/`
- **Ayurveda**: `src/pagesservicesayurveda-dubai/`
- **Physiotherapy**: `src/pagesservicesphysiotherapy-dubai/`
- **General Physician**: `src/pagesservicesgeneral-physician-dubai/`
- **Facial**: `src/pagesservicesfacial-dubai/`

## Quick Copy Template

Copy this template into any page file and customize the content:

```javascript
const customContent = {
  hero: {
    description: 'Your description here'
  },
  overview: {
    title: `Understanding ${subcategoryName} in Dubai`,
    leftCards: [
      {
        id: 1,
        title: 'What is it?',
        description: 'Description here'
      },
      {
        id: 2,
        title: 'Who is it for?',
        description: 'Description here'
      },
      {
        id: 3,
        title: 'Duration',
        description: 'Description here'
      }
    ],
    rootCauses: [], // Optional - leave empty if not needed
    quickFacts: [
      { label: 'Treatment Type', value: 'Value here' },
      { label: 'Anesthesia', value: 'Value here' },
      { label: 'Recovery Time', value: 'Value here' },
      { label: 'Side Effects', value: 'Value here' }
    ],
    approachCards: [
      {
        id: 1,
        title: 'Title here',
        description: 'Description here',
        hasLearnMore: true,
        expandedContent: 'Expanded content here'
      }
    ]
  },
  benefits: {
    benefits: [
      {
        id: 1,
        title: 'Benefit title',
        percentage: 90,
        description: 'Description here'
      }
    ]
  }
};
```

Then pass it to components as shown above.

