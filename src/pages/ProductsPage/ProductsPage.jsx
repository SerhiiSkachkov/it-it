import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UiAlert } from "../../components/Ui/UiAlert/UiAlert";
import { UiLoader } from "../../components/Ui/UiLoader/UiLoader";
import { UiCard } from "../../components/Ui/UiCard/UiCars";
import { UiList } from "../../components/Ui/UiList/UiList";
import { UiComments } from "../../components/Ui/UiComments/UiComments";
import { UiCommentForm } from "../../components/Ui/UiForms/UiComentForm";
import { Panel } from "../../components/Layouts/Panel/Panel";
import { LayoutWithSidebar } from "../../components/Layouts/LayoutWithSidebar/LayoutWithSidebar";
import { Container } from "../../components/Layouts/Container/Container";

import { service } from "../../services/services";
import { showNotification } from "../../store/notification/actions";

const COMMENTS_FORM_DATA = {
  fields: [{ name: "comment", type: "textarea", id: "comment" }],
};

const INITIAL_COMMENT_FORM_VALUE = {
  comment: "",
  rate: 0,
};

const productsSelector = (state) => state.login.isLogin;

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(productsSelector);

  const [loading, setLoading] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [activeProduct, setActiveProduct] = useState();
  const [commentsList, setCommentsList] = useState([]);
  const [commentFormState] = useState(INITIAL_COMMENT_FORM_VALUE);

  useEffect(() => {
    setLoading(true);
    service
      .getProducts()
      .then((res) => setProductsList(res))
      .then(() => setLoading(false))
      .catch((err) => {
        console.log("[err]", err);
        dispatch(
          showNotification({
            type: "danger",
            message: "Oops something happened",
          })
        );
      });
  }, [dispatch]);

  const hendleActiveProduct = (id) => {
    setActiveProduct(productsList.find((product) => product.id === id));

    setLoadingComments(true);
    service
      .getComments(id)
      .then((result) => {
        setCommentsList(result);
        setLoadingComments(false);
      })
      .catch((err) => {
        console.log("[err]", err);
        dispatch(
          showNotification({
            type: "danger",
            message: "Oops something happened",
          })
        );
      });
  };

  const handleSubmitComment = (commentData, clearForm) => {
    const id = activeProduct.id;

    const comment = {
      text: commentData.comment,
      rate: commentData.rate,
    };

    service
      .postComment(id, comment)
      .then((result) => {
        if (result.success) {
          dispatch(
            showNotification({
              type: "success",
              message: "Comment added",
            })
          );
        }
      })
      .then(() => clearForm())
      .catch(() => {
        dispatch(
          showNotification({
            type: "danger",
            message: "Oops something happened",
          })
        );
      });
  };

  if (loading) return <UiLoader />;

  return (
    <section className="page  page-products">
      <Container>
        <LayoutWithSidebar
          sidebar={
            <UiList items={productsList} onClick={hendleActiveProduct} />
          }
          content={
            <>
              {activeProduct ? (
                <>
                  <UiCard card={activeProduct} />
                  {isLogin ? (
                    <Panel title={"Comment"}>
                      <UiCommentForm
                        maxRate={5}
                        initialValue={commentFormState}
                        onHandleSubmit={handleSubmitComment}
                        formData={COMMENTS_FORM_DATA}
                        submitBtnText={"Send"}
                      />
                    </Panel>
                  ) : (
                    <UiAlert
                      type={"danger"}
                      message={"Comments can be left only by registered users"}
                    />
                  )}
                  <UiComments
                    comments={commentsList}
                    loading={loadingComments}
                  />
                </>
              ) : (
                <UiAlert type={"info"} message={"Choose a product"} />
              )}
            </>
          }
        />
      </Container>
    </section>
  );
};
