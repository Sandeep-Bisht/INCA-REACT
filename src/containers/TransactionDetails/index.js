import React from 'react'

function TransactionDetails() {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h1>Transaction Details</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div className='registration-number'>
                    <span>Registeration number</span>
                    <input type='text'/>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='email-address'>
                   <span>E-mail</span>
                    <input type='email'/>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <div className='bank-box'>
                    <span>Bank</span>
                    <input type='text' />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <div className='account-number'>
                    <span>Account number</span>
                    <input type='number' />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div className='account-name'>
                    <span>Account name</span>
                    <input type='text' />
                </div>
            </div>
            <div className='col-md-6'>
                <div className='upload-box'>
                    <input type='file' />
                    <span><button>Upload</button></span>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div className='transaction-date'>
                    <span>Transaction</span>
                    <input type='text'/>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='reference-number'>
                    <span>Reference number</span>
                    <input type='text' />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <button>Submit</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default TransactionDetails