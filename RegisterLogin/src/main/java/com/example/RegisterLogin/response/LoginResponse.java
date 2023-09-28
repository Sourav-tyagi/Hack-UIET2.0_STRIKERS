package com.example.RegisterLogin.response;

//import lombok.Getter;

public class LoginResponse{

   // @Getter
    String message;
   // @Getter
    Boolean status;

    public LoginResponse( String message,boolean status) {

        this.message = message;
        this.status = status;
    }

    public LoginResponse(String emailNotExits, Boolean b) {

    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                //"emailNoteExits='" + emailNotExits+'\''+
                "message='" + message + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
