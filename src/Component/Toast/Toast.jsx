import { Toast } from "bootstrap";
import { ToastBody, ToastHeader } from "reactstrap";
const Toasts = () => {
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <span class="alert-icon">
      <i class="ni ni-like-2"></i>
    </span>
    <span class="alert-text">
      <strong>Success!</strong> This is a success alert—check it out!
    </span>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>;
};
export default Toasts;
