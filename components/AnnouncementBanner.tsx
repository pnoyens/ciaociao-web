const mailtoLink = "mailto:requests@ciaociao.social?subject=Early%20Bird%20Access%20Request%20-%2014-Day%20Free%20Trial%20%2B%2030%25%20Discount";

export default function AnnouncementBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-cc-3 border-b-2 border-border h-[40px]">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10 h-full flex items-center justify-center gap-1.5 md:gap-2 text-xs md:text-sm">
        <span className="font-medium">Early Bird Special:</span>
        <span className="hidden sm:inline">14-day free trial + 30% off for early adopters.</span>
        <span className="sm:hidden">Free trial + 30% off!</span>
        <a
          href={mailtoLink}
          className="font-medium underline underline-offset-2 hover:no-underline"
        >
          Claim your spot →
        </a>
      </div>
    </div>
  );
}
