import { renderFormSection } from './renderFormSection';

export const formColumnRender = ({ formRecord, onReferenceFieldClick }) => {
    const { sections, formFieldValues } = formRecord;

    let sectionsElement = [];
    let defaultSection = null;

    sections.forEach(section => {
    	if (!section.rows || !section.rows.length) return;

		const sectionLayout = renderFormSection({ rows: section.rows, formFieldValues, onReferenceFieldClick });

		section = {
			items: sectionLayout,
			id: section.sysId,
			label: section.label,
			defaultSection: section.defaultSection,
		}

		if (section.defaultSection) {
			defaultSection = section;
		} else {
			sectionsElement.push(section);
		}
    });

    return [defaultSection, sectionsElement]
}
