/*=========================================================
    AUDIT HUB PRO — TOOL DATABASE
    Developed by Vicky Shaw
=========================================================*/

const tools = [
    {
        id: 1,
        code: "AH-01",
        name: "Inventory Verification",
        description: "Barcode-level inventory verification with quantity validation and reconciliation support.",
        category: "audit",
        folder: "inventory-verification",
        icon: "fa-solid fa-boxes-stacked",
        version: "1.0",
        featured: true,
        status: "active"
    },
    {
        id: 2,
        code: "AH-02",
        name: "Supervision Audit Tool",
        description: "Perform supervision audits with structured observations and reporting.",
        category: "audit",
        folder: "supervision-audit",
        icon: "fa-solid fa-clipboard-check",
        version: "1.0",
        featured: true,
        status: "active"
    },
    {
        id: 3,
        code: "AH-03",
        name: "Invoice Receivable Calculator",
        description: "Calculate invoice receivables, GST, TDS and outstanding payment values.",
        category: "finance",
        folder: "invoice-receivable",
        icon: "fa-solid fa-file-invoice-dollar",
        version: "1.0",
        featured: true,
        status: "active"
    },
    {
        id: 4,
        code: "AH-04",
        name: "GST Calculator",
        description: "Calculate GST values for inclusive and exclusive amounts.",
        category: "gst",
        folder: "gst-only",
        icon: "fa-solid fa-percent",
        version: "1.0",
        featured: false,
        status: "active"
    },
    {
        id: 5,
        code: "AH-05",
        name: "GST Calculator (CGST / SGST / IGST)",
        description: "Calculate GST with separate CGST, SGST and IGST breakup.",
        category: "gst",
        folder: "gst-CGST_SGST_IGST",
        icon: "fa-solid fa-receipt",
        version: "1.0",
        featured: true,
        status: "active"
    }
];

/*=========================================================
    CATEGORY LABELS + ICONS
    (used only when that category exists in `tools`)
=========================================================*/

const categoryMeta = {
    audit:      { name: "Audit",      icon: "fa-solid fa-clipboard-check" },
    inventory:  { name: "Inventory",  icon: "fa-solid fa-boxes-stacked" },
    finance:    { name: "Finance",    icon: "fa-solid fa-indian-rupee-sign" },
    gst:        { name: "GST",        icon: "fa-solid fa-file-invoice" },
    warehouse:  { name: "Warehouse",  icon: "fa-solid fa-warehouse" },
    excel:      { name: "Excel",      icon: "fa-solid fa-file-excel" },
    utilities:  { name: "Utilities",  icon: "fa-solid fa-screwdriver-wrench" }
};

/*=========================================================
    HELPER FUNCTIONS
=========================================================*/

function getActiveTools() {
    return tools.filter(tool => tool.status === "active");
}

function getFeaturedTools() {
    return tools.filter(tool => tool.featured);
}

function getToolsByCategory(category) {
    if (category === "all") return tools;
    return tools.filter(tool => tool.category === category);
}

function searchTools(keyword) {
    keyword = keyword.toLowerCase().trim();
    return tools.filter(tool =>
        tool.name.toLowerCase().includes(keyword) ||
        tool.description.toLowerCase().includes(keyword) ||
        tool.category.toLowerCase().includes(keyword) ||
        (tool.code || "").toLowerCase().includes(keyword)
    );
}

function getToolURL(tool) {
    return `tools/${tool.folder}/index.html`;
}

/* Unique categories actually present in the tool list, in a stable order */
function getUsedCategories() {
    const seen = [];
    tools.forEach(tool => {
        if (!seen.includes(tool.category)) seen.push(tool.category);
    });
    return seen;
}

/*=========================================================
    APP CONFIG
=========================================================*/

const appConfig = {
    appName: "Audit HUB Pro",
    version: "4.0",
    author: "Vicky Shaw",
    defaultCategory: "all",
    searchMinCharacters: 1
};
