# Constants Folder

This folder contains all centralized configuration and data for the application. Update these files to make changes that will automatically reflect across all pages.

## Files

### `careers.ts`
Contains all career page related data:

- **CAREERS_CONFIG**: Email and feature flags
  - `applicationEmail`: Where job applications are sent (currently: shankarsumit49@gmail.com)
  - `googleFormId`: Optional Google Form integration
  - `hasOpenings`: Toggle to show/hide job listings

- **BENEFITS**: Employee benefits displayed on careers page
- **POSITIONS**: All job openings with full details
- **CULTURE_VALUES**: Company culture and values
- **COMPANY_STATS**: Team statistics and metrics
- **HIRING_PROCESS**: Application process steps

### `index.ts`
Central export file for all constants. Import from here in your pages:
```typescript
import { CAREERS_CONFIG, BENEFITS, POSITIONS } from "@/constants";
```

## How to Update

### Change Application Email
Edit `careers.ts`:
```typescript
export const CAREERS_CONFIG = {
  applicationEmail: "your-new-email@example.com",
  // ...
};
```

### Add a New Job Position
Edit `careers.ts` and add to the `POSITIONS` array:
```typescript
{
  title: "New Position Title",
  department: "Department Name",
  location: "Location",
  type: "Full-time",
  salary: "$XX,XXX - $XX,XXX",
  icon: IconName, // Import from lucide-react
  description: "Job description...",
  requirements: ["Requirement 1", "Requirement 2", ...]
}
```

### Toggle Job Openings
Set `hasOpenings: false` in `CAREERS_CONFIG` to show "No openings" message.

### Add More Sections
Create new files in this folder for other pages (e.g., `about.ts`, `services.ts`, etc.) and export them from `index.ts`.
