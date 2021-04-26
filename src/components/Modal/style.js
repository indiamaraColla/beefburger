import styled from "styled-components";

export const Card = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  .modal {
    width: 500px;
    background: white;
    border: 1px solid  #193B4B;
    border-radius: 18px;
    box-shadow: 2rem 2rem rgba(black, 0.2);

    &.off {
      opacity: 0;
      visibility: hidden;
      filter: blur(8px);
      box-shadow: 1rem 0 0 rgba(black, 0.2);
    }

    h2 {
      border-bottom: 1px solid #ccc;
      padding: 1rem;
      margin: 0;
      color: #D41515;
    }
    .content {
      padding: 1rem;
    }
    .actions {
      border-top: 1px solid #ccc;
      padding: 0.5rem 1rem;
      
      button {
        align-items: center;
        justify-content: center;
        background:  #193B4B;
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
        border-radius: 18px;
        color: #fff;
        width: 100%;
        display: flex;
      }
    }
  }
  #centered-toggle-button {
    position: absolute;
  }
`;
