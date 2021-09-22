import { getCurrentIssues } from "../stores/issueStore";
import { ISSUE_PROJECT_ID } from "../stores/pageStore";

const downloadAsTodoFile = () => {
    if (confirm("Are you sure to download the file?")) {
        let content = "";
        let no = 1;
        getCurrentIssues().map((issue) => {
            if (issue.projectId == ISSUE_PROJECT_ID) {
                content += `${no}. ${issue.solved ? "✅" : "❌"} ${issue.title
                    } - ${issue.description || "..."}\n`;
                no++;
            }
        });
        const a = document.createElement("a");
        const file = new Blob([content], { type: "plain/text" });

        a.href = URL.createObjectURL(file);
        a.download = "TODO";
        a.click();
        URL.revokeObjectURL(a.href);
    }
};

export {
    downloadAsTodoFile
}