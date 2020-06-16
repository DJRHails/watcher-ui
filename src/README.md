# Project structure 🏗

This source structure is designed to maintain modularity and keep clear.

<br>

| File or folder | Description                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| `components/`  | Components used within the site, each should be contained within a folder with any sub-components marked. |
| `documentation/`| Additional stories not directly attached to a component (e.g. Colors) |
| `generators/` | Any generators used to speed up layout time. |
| `themes/`    | Theme UI Specification file, exported by default.|
| `types/`     | Any additional types, type utilities required for libraries.|

## Components

```bash
components
├── <ComponentName>
│   ├── <ComponentName>.stories.tsx
│   ├── <ComponentName>.test.tsx
│   ├── <ComponentName>.tsx
│   └── index.ts
└── index.ts
```

<!-- `tree` output -->