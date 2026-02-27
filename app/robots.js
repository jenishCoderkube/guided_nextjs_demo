export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "*",
        disallow: ["/jobs?*salary=*", "/jobs?*contract=*", "/jobs?*sort=*"],
      },
    ],
    sitemap: "https://gs-medtech.com/sitemap.xml",
  };
}
