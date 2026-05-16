package core

type YesAsAServiceError struct {
	IsYesAsAServiceError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewYesAsAServiceError(code string, msg string, ctx *Context) *YesAsAServiceError {
	return &YesAsAServiceError{
		IsYesAsAServiceError: true,
		Sdk:              "YesAsAService",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *YesAsAServiceError) Error() string {
	return e.Msg
}
