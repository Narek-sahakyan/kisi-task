import withIcon from "./withIcon";

function ChevronRight(props: React.SVGProps<any>) {
  return (
    <svg {...props}>
      <path
        d="M1.99997 0.860229L0.589966 2.27023L5.16997 6.86023L0.589966 11.4502L1.99997 12.8602L7.99997 6.86023L1.99997 0.860229Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default withIcon(ChevronRight);
