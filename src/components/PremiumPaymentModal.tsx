import Modal from "react-modal";

const PremiumPaymentModal = ({
  isOpen,
  onClose,
  onPaymentSuccess,
  paymentStatus,
  setPaymentStatus,
  onUnsubscribe,
}: any) => {
  const handlePayment = () => {
    // Simulate payment process here (you can add your own logic for real payments)
    // For the example, we will simply mark the payment as successful after 2 seconds.
    setTimeout(() => {
      setPaymentStatus("success");
    }, 2000);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Premium Membership Payment"
      className={`text-center flex w-screen items-center justify-center h-[90%]`}
    >
      {paymentStatus === "success" ? (
        <div className="flex flex-col justify-center items-center">
          <div className="bg-slate-100 w-[80%] m-auto p-6 rounded-xl">
            <h2 className="font-serif font-bold text-[24px] mb-3">
              Payment Successful!
            </h2>
            <p className="font-serif">
              Congratulations! You are now a premium member.
            </p>
            <div className="flex justify-between mt-5">
              <button
                className="bg-fuchsia-400 hover:bg-fuchsia-600 p-2 rounded-full"
                onClick={onPaymentSuccess}
              >
                Close
              </button>
              <button
                className="bg-red-400 hover:bg-red-600 p-2 rounded-full"
                onClick={onUnsubscribe}
              >
                Unsubscribe
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="bg-slate-100 w-[80%] m-auto p-5 rounded-xl">
            <h2 className="font-serif font-bold text-[24px] mb-3">
              Upgrade to Premium Membership
            </h2>
            <p className="font-serif">
              Enjoy all premium features and get access to all Posts.
            </p>
            <div className="flex justify-between mt-5">
              <button
                className="bg-green-500 hover:bg-green-700 p-2 rounded-full"
                onClick={handlePayment}
              >
                Pay Now
              </button>
              <button
                className="bg-red-400 hover:bg-red-600 p-2 rounded-full"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default PremiumPaymentModal;
