class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper_method :current_account, :logged_in?

    private

    def current_account
        return nil unless session[:session_token]
        @current_account ||= Account.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_account
    end

    def login(account)
        account.reset_session_token!
        session[:session_token] = account.session_token
        @current_account = account
    end

    def logout
        current_account.reset_session_token!
        session[:session_token] = nil
        @current_account = nil
    end

    def require_logged_in
        unless current_account
        render json: { base: ['invalid credentials'] }, status: 401
        end
    end

end
