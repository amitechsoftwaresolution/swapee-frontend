import paths from '../Json/paths.json'

export const appBarLinks = [
    { label: "Home", "href": paths.Home },
    { label: "Categories", "href": "#" },
    { label: "About Us", "href": paths.AboutUs }
]

export const drawerLinks = [
    { label: "Home", "href": paths.Home },
    { label: "Dashboard", "href": paths.Dashboard },
    { label: "Categories", "href": "#" },
    { label: "About Us", "href": paths.AboutUs },
    { label: "FAQ", "href": paths.FAQ },
    { label: "Privacy & Policy", "href": paths.PrivacyAndPolicy },
    { label: "Terms & Condition", "href": paths.TermsAndConditions }
]

export const footerQuickLinks = [
    { label: "FAQ", href: paths.FAQ},
    { label: "About Us", href : paths.AboutUs },
    { label: "Privacy & Policy", href: paths.PrivacyAndPolicy },
    { label: "Terms & Condition", href: paths.TermsAndConditions },
]

export const footerSocialLinks  = [
    { label: "Facebook", url: "https://www.facebook.com" },
    { label: "Twitter", url: "https://twitter.com" },
    { label: "Instagram", url: "https://www.instagram.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com" }
]

export const footerFindFastLinks = [
    { label: "Sign In", href : paths.SignIn },
    { label: "Sign Up", href : paths.SignUp },
    { label: "Forgot Password", href : paths.ForgotPassword }
]

export const primaryColor = "#31e2f2"